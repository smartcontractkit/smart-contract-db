import * as GrantPrograms from './grant-program.json';

export interface GrantProgram {
  'Grant Programs': GrantPrograms[];
}

interface GrantPrograms {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const grantPrograms: GrantProgram[] = GrantPrograms;
