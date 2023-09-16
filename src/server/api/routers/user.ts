import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .query(async ({ ctx }) => {   
        if (!ctx.auth.userId) {
            throw new TRPCError({ code: 'UNAUTHORIZED', message: "prob not signed in" });
        }
      const user = await ctx.db.user.create({
        data: {
          id: ctx.auth.userId,
        },
      });
      return user;
    }),
});