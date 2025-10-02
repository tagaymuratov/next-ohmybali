import type { Rule } from '@sanity/types';

export default{
  name: 'mainType',
  title: 'Основная информация',
  type: 'document',
  fields:[
    {
      name: 'title_ru',
      type: 'string',
      title: 'Заголовок RU',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title_en',
      type: 'string',
      title: 'Заголовок EN',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt текст',
          validation: (Rule: Rule) => Rule.required(),
        }
      ]
    },
    {
      name: 'content_ru',
      title: 'Контент RU',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content_en',
      title: 'Контент EN',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    }
  ]
}