export interface Library {
  title: string;
  description: string;
  link: string;
}

export const libraries: { [id: string]: Library } = {};
