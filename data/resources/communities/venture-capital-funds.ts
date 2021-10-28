import * as VentureCapitals from './venture-capital-funds.json';

export interface VentureCapital {
  'VENTURE CAPITAL FUNDS': VentureCapitalFunds[];
}

interface VentureCapitalFunds {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const ventureCapitalFunds: VentureCapital[] = VentureCapitals;
