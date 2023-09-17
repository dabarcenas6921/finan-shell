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

    update: publicProcedure
    .input(z.object({ budget: z.any(), budgetAmount: z.any(), date: z.any(), demographic: z.any(), goals: z.any(), salary: z.any() }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.auth.userId) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: "prob not signed in" });
    }

      return ctx.db.user.update({
        where: { id: ctx.auth.userId },
        data: {
          budget: input.budget,
          budgetAmount: input.budgetAmount,
          dateTo: input.date?.to,
          dateFrom: input.date?.from,
          demographic: input.demographic,
        },
      });
    }),
});