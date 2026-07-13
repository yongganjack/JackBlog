import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    excerpt: z.string().optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    readTime: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    cover: z.string().optional(),
    featured: z.boolean().optional().default(false)
  })
});

export const collections = { blog };
