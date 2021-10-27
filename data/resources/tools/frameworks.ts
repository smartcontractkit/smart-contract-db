import * as Frameworks from './frameworks.json';

export interface Framework {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const frameworks: Framework[] = Frameworks;
