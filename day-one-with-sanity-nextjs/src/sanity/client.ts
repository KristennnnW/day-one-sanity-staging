import "server-only";
import { createClient, type QueryParams } from "next-sanity";

const dataset = process.env.SANITY_ENV || 'production';

console.log(`Using dataset: ${dataset}`);

export const client = createClient({
  projectId: "9r4zkoar",
  dataset,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === 'production',
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  console.log(`Fetching data from dataset: ${dataset}`);
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}
