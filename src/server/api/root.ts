import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "~/server/api/routers/user";
import { plaidRouter } from "~/server/api/routers/plaid";

import "server-only";

export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
  plaid: plaidRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
