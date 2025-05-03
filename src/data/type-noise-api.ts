import { fetchAPI } from "./graphql-api";

type NoiseItemFields = {
  description: string;
  title: string;
};

export type NoiseItemNode = {
  id: string;
  fields: NoiseItemFields;
};

export async function getAllNoiseContent(
  limit?: number
): Promise<NoiseItemNode[]> {
  const response = await fetchAPI(`
      query getAllNoiseContent {
            noise {
                nodes {
                    id
                    fields {
                        description
                        title
                        }
                }
            }
        }
    `);

  return response?.noise?.nodes;
}
