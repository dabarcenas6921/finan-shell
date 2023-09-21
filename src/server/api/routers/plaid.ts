import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { CountryCode, Products } from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.developer, // Choose the appropriate environment
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
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
  webhook: z.string(),
  redirect_uri: z.string(),
  country_codes: z.array(z.nativeEnum(CountryCode)),
});

//
const appRouter = createTRPCRouter({
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
});

export type AppRouter = typeof appRouter;
