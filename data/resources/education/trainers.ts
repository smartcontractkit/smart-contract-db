// Can be excluded for initial launch
import * as Trainers from './trainers.json';

export interface Trainer {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const trainers: Trainer[] = Trainers;
