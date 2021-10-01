export interface Language {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const language: Language[] = [
  {
    id: 'solidity',
    title: 'Solidity',
    description:
      'Solidity is an object-oriented programming language for writing smart contracts. It is used for implementing smart contracts on various blockchain platforms, most notably, Ethereum.',
    link: 'https://docs.soliditylang.org/en/v0.8.9/',
    src: '/img/solidity-logo.svg',
  },
];
