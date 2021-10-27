import * as Wallet from './wallets.json';

export interface Wallets {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const wallets: Wallets[] = Wallet;
