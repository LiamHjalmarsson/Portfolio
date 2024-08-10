import { defineType, defineField } from "sanity";

export default defineType({
    name: 'background',
    title: 'Work and Education Background',
    type: 'document',
    fields: [
        defineField({
            name: 'type',
            title: 'Type*',
            type: 'string',
            options: {
                list: [
                    { title: 'Work Experience', value: 'work' },
                    { title: 'Education', value: 'education' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'positionOrDegree',
            title: 'Position or Degree*',
            type: 'string',
        }),
        defineField({
            name: 'institutionOrCompany',
            title: 'Institution or Company*',
            type: 'string',
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date*',
            type: 'date',
        }),
        defineField({
            name: 'endDate',
            title: 'End Date*',
            type: 'date',
        }),
        defineField({
            name: 'description',
            title: 'Description*',
            type: 'text',
        }),
        defineField({
            name: 'descriptions',
            title: 'Project Description',
            type: 'blockContent', 
        }),
    ],
});
