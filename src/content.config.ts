// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import the glob loader
import { glob } from 'astro/loaders';

// 3. Import Zod for schema validation
import { z } from 'astro/zod';

// 4. Define the `sugarcss` collection
const sugarcss = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/sugarcss',
  }),
  schema: z.object({
    title: z.string(),
    namespace: z.string(),
    description: z.string().optional(),
    type: z.string(),
    status: z.string(),
    since: z.string(),
    platform: z.string(),
    author: z.string(),
  }),
});

// 5. Export a single `collections` object to register the collection
export const collections = { sugarcss };
