// Can be excluded for initial launch
import * as Resources from './resources.json';

export interface Trainer {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const trainers: Trainer[] = Resources.Trainers;
