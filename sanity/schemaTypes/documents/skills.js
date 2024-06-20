import { defineType, defineField } from "sanity";

export default defineType({
    name: 'skillType',
    title: 'Skill Type',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Skill Type Name',
            type: 'string',
        }),
        defineField({
            type: 'icon.manager',
            name: 'icon',
            title: 'Icon',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Frontend', value: 'Frontend' },
                    { title: 'Backend', value: 'Backend' },
                    { title: 'UI/UX', value: 'UI/UX' },
                    { title: 'Other', value: 'Other' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
});
