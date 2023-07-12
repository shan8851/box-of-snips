import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const snippetRouter = createTRPCRouter({
  getAllSnippets: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.snippet.findMany();
  }),

  createSnippet: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input}) => {
      return ctx.prisma.snippet.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),
});
