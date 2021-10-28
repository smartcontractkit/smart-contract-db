import * as Enterprises from './enterprise.json';

export interface Enterprise {
  Enterprise: Enterprises[];
}

interface Enterprises {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const enterprise: Enterprise[] = Enterprises;
