import * as Resources from './resources.json';

export interface School {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const schools: School[] = Resources.Schools;
