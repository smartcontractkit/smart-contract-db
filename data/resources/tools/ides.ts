import * as IDES from './ides.json';

export interface IDE {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const ides: IDE[] = IDES;
