import * as Blockchain from './blockchain.json';

export interface Blockchains {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const blockchains: Blockchains[] = Blockchain;
