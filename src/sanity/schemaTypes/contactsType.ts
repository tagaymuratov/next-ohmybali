import type { Rule } from '@sanity/types';

export default{
  name: 'contactsType',
  title: 'Контакты',
  type: 'document',
  fields:[
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