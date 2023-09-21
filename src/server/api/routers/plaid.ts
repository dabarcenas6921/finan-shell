import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { CountryCode, Products } from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox, // Choose the appropriate environment
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.NEXT_PUBLIC_PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.NEXT_PUBLIC_PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

//Structure of the link token
const createLinkTokenInput = z.object({
  user: z.object({
    client_user_id: z.string(),
  }),
  client_name: z.string(),
  products: z.array(z.nativeEnum(Products)),
  language: z.string(),
  redirect_uri: z.string(),
  country_codes: z.array(z.nativeEnum(CountryCode)),
});

//
export const plaidRouter = createTRPCRouter({
  create_link_token: publicProcedure
    .input(createLinkTokenInput)
    .mutation(async ({ input }) => {
      try {
        const createTokenResponse = await plaidClient.linkTokenCreate(input);
        return createTokenResponse.data;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create link token",
        });
      }
    }),

  exchange_public_token: publicProcedure
    .input(z.object({ public_token: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const { public_token } = input;
        const response = await plaidClient.itemPublicTokenExchange({
          public_token,
        });

        const accessToken = response.data.access_token;

        //Store the token in the users table
        return { accessToken };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to exchange public token for access token",
        });
      }
    }),
});

export type AppRouter = typeof plaidRouter;
