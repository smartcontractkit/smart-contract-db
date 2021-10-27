import * as Monitorings from './monitoring.json';

export interface Monitoring {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const monitoring: Monitoring[] = Monitorings;
