// Can be excluded for initial launch
import * as Resources from './resources.json';

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const tutorials: Tutorial[] = Resources.Trainers;
