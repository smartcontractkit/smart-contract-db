import * as Developers from './developer.json';

export interface Developer {
  Developer: Developers[];
}
interface Developers {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const developer: Developer[] = Developers;
