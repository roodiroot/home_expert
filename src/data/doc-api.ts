import { fetchAPI } from "./graphql-api";

export type DocItem = {
  title: string;
  document: {
    content: string;
    file: {
      node: {
        link: string | null;
      } | null;
    } | null;
  };
};

export async function getAllDocumentByTitle(title: string): Promise<DocItem> {
  const response = await fetchAPI(`
      query getAllFAQBlock {
        docs (where: {title: "${title}"}) {
            nodes {
                title
                document {
                    content
                    file {
                        node {
                            link
                        }
                    }
                }
            }
        }
      }
    `);

  return response?.docs?.nodes[0];
}
