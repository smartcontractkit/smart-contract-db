import * as Events from './events.json';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  link: string;
  src: string;
}

export const events: Event[] = Events;
