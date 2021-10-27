import * as Libraries from './libraries.json';

export interface Library {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const libraries: Library[] = Libraries;
