import * as Workshops from './workshops.json';

export interface Workshop {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const workshops: Workshop[] = Workshops;
