import * as Exchange from './exchanges.json';

export interface Exchanges {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const exchanges: Exchanges[] = Exchange;
