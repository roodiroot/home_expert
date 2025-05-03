import { fetchAPI } from "./graphql-api";

export type FAQItem = {
  fildsFaq: {
    answer: string;
    question: string;
  };
  id: string;
};

export async function getAllFAQBlock(limit?: number): Promise<FAQItem[]> {
  const response = await fetchAPI(`
      query getAllFAQBlock {
        faqs {
            nodes {
                fildsFaq {
                    answer
                    question
                }
            id
            }
        }
      }
    `);

  return response?.faqs?.nodes;
}
