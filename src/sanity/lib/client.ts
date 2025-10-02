import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
