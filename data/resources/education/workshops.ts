import * as Resources from './resources.json';

export interface Workshop {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const workshops: Workshop[] = Resources.Workshops;
