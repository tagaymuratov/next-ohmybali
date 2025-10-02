import { type SchemaTypeDefinition } from 'sanity';
import post from './postType';
import main from './mainType';
import contacts from './contactsType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, main, contacts],
}