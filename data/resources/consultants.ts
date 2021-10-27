import * as Consultants from './consultants.json';

export interface Consultant {
  id: string;
  title: string;
  description: string;
  link: string;
  src: string;
}

export const consultants: Consultant[] = Consultants;
