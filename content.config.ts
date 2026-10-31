import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const technologyKeys = z.array(z.string()).default([])

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: 'data',
            source: 'projects/*.yml',

            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                order: z.number().default(0),
                image: z.object({
                    src: z.string(),
                    alt: z.string(),
                }),
                href: z.url(),
                githubUrl: z.string().optional(),
                technologies: technologyKeys,
            }),
        }),

        technologies: defineCollection({
            type: 'data',
            source: 'technologies/*.yml',

            schema: z.object({
                title: z.string(),
                category: z.enum([
                    'frontend',
                    'backend',
                    'database',
                    'tool',
                    'other',
                ]),
                order: z.number().default(0),
                icon: z.string().optional(),
                size: z.enum(['small', 'large']).default('small'),
                featured: z.boolean().default(false),
            }),
        }),

        background: defineCollection({
            type: 'data',
            source: 'background/*.yml',
            schema: z.object({
                title: z.string(),
                code: z.string(),
                company: z.string(),
                type: z.enum(['work', 'education']),
                description: z.string(),
                order: z.number().default(0),
                areas: z.array(z.object({
                    title: z.string(),
                    icon: z.string(),
                    technologies: technologyKeys,
                    skills: z.array(z.string()).default([]),
                })).default([]),
            }),
        }),
    },
})
