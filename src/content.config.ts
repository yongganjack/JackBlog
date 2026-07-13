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
    featured: z.boolean().optional().default(false),
    featuredOrder: z.number().optional()
  })
});

const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    stack: z.array(z.string()).optional().default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().optional()
  })
});

export const collections = { blog, project };
