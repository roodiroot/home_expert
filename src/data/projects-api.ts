import { fetchAPI } from "./graphql-api";

type ImageNode = {
  node: {
    link: string;
  };
};

type ProjectFields = {
  description: string;
  duration: string;
  title: string;
  image: ImageNode | null;
  image_1: ImageNode | null;
  image_2: ImageNode | null;
  image_3: ImageNode | null;
  image_4: ImageNode | null;
};

export type ProjectNode = {
  id: string;
  fieldsProjects: ProjectFields;
};

export async function getAllProjects(limit?: number): Promise<ProjectNode[]> {
  const response = await fetchAPI(`
      query getAllProjects {
        projects {
            nodes {
                id
                fieldsProjects {
                    description
                    duration
                    title
                    image {
                        node {
                            link
                        }
                    }
                    image_1 {
                        node {
                            link
                        }
                    }
                    image_2 {
                        node {
                            link
                        }
                    }
                    image_3 {
                        node {
                            link
                        }
                    }
                    image_4 {
                        node {
                            link
                        }
                    }
                }
            }
        }
      }
    `);

  return response?.projects?.nodes;
}
