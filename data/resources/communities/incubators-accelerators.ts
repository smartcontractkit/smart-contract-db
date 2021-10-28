import * as IncubatorsAccelerators from './incubators-accelerators.json';

export interface IncubatorAccelerator {
  'Incubators / Accelerators': IncubatorsAccelerators[];
}

interface IncubatorsAccelerators {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const incubatorsAccelerators: IncubatorAccelerator[] = IncubatorsAccelerators;
