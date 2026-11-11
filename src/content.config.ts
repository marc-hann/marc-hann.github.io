import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Projects shown in the poster row, the index and the side panels. One Markdown file per project. */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int(),
      until: z.number().int().optional(),
      role: z.string(),
      stack: z.array(z.string()),
      status: z.enum(['Live', 'In progress', 'Case study', 'Open source', 'Archived']),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      poster: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).default(1),
      illustration: z
        .enum([
          'questionnaire-engine',
          'clinical-questionnaires',
          'hr-platform',
          'tenant-app',
          'prime-mvp',
          'genomic-upload',
          'variant-model',
          'design-system',
          'prime-ui',
          'myhedera',
          'lab-prep',
        ])
        .optional(),
      links: z
        .object({
          live: z.url().optional(),
          repo: z.url().optional(),
          appStore: z.url().optional(),
        })
        .default({}),
      images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

export const collections = { projects };
