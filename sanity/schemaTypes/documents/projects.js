import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title*',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Project Image*',
            type: 'image',
            options: {
                hotspot: true,
                metadata: ['lqip', 'palette', 'blurhash'],
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text*',
                },
            ],
        }),
        defineField({
            name: 'skills',
            title: 'Skills in Project',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'skillType' }],
                },
            ],
        }),
        defineField({
            name: 'github',
            title: 'Github',
            type: 'url',
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'url',
        }),
        defineField({
            name: 'description',
            title: 'Project Description',
            type: 'blockContent', 
        }),
        defineField({
            name: 'additionalImages',
            title: 'Additional Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
                metadata: ['lqip', 'palette', 'blurhash'],
            },
        }),
    ],
});
