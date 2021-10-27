import * as Schools from './schools.json';

export interface School {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const schools: School[] = Schools;
