import * as Administrations from './administration.json';

export interface Administration {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const administration: Administration[] = Administrations;
