import * as Language from './languages.json';

export interface Languages {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const languages: Languages[] = Language;
