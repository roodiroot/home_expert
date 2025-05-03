import { fetchAPI } from "./graphql-api";

type ImageNode = {
  node: {
    link: string;
  };
};

type ServiceItemSE = {
  image: ImageNode;
  description: string;
  price: number;
  title: string;
};

export type ServiceNode = {
  id: string;
  fieldsServicePrice: ServiceItemSE;
};

export async function getAllServicesPrice(
  limit?: number
): Promise<ServiceNode[]> {
  const response = await fetchAPI(`
      query getAllServicesPrice {
        serviceprices {
            nodes {
            id
            fieldsServicePrice {
                image {
                    node {
                        link
                    }
                }
                description
                price
                title
            }
        }
  }
      }
    `);

  return response?.serviceprices?.nodes;
}
