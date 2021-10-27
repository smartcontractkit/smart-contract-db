import * as Securities from './security.json';

export interface Security {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const security: Security[] = Securities;
