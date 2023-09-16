import { initTRPC, TRPCError } from "@trpc/server";
import { type NextRequest } from "next/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { getAuth } from "@clerk/nextjs/server";
import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/api";
import { db } from "~/server/db";

interface AuthContext {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

export const createInnerTRPCContext = ({ auth }: AuthContext) => {
  return {
    auth,
    db,
  };
};

export const createTRPCContext = (opts: { req: NextRequest }) => {
  return createInnerTRPCContext({ auth: getAuth(opts.req) });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: 'FORBIDDEN', message: "prob not signed in" });
  }

  return next({
    ctx: {
      auth: ctx.auth,
    },
  });
});


export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(isAuthed);