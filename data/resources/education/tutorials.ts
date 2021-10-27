// Can be excluded for initial launch
import * as Tutorials from './tutorials.json';

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const tutorials: Tutorial[] = Tutorials;
