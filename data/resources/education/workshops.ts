export interface Workshop {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const workshops: Workshop[] = [
  {
    id: 'blockchain-developer',
    title: 'Ethereum Blockchain Developer Bootcamp With Solidity (2021)',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'https://www.udemy.com/course/blockchain-developer/',
  },
];
