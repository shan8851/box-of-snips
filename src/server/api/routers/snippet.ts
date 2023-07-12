import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
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
    .input(z.object({
      title: z.string(),
      content: z.string(),
      language: z.string(),
      isPrivate: z.boolean(),
      tags: z.array(z.string()),
    }))
    .mutation(({ ctx, input }) => {
      const slug: string = slugify(`${input.title}-${ctx.session.user.id}`, { lower: true, strict: true });
      const uniqueId: string = uuidv4();
      const url = `${slug}-${uniqueId}`;
      return ctx.prisma.snippet.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
          content: input.content,
          language: input.language,
          isPrivate: input.isPrivate,
          tags: input.tags,
          url: url,
        },
      });
    }),
});
