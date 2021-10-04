export interface IDE {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const ides: IDE[] = [
  {
    id: 'remix-ethereum',
    title: 'Remix Ethereum',
    description:
      'Remix is a web browser based IDE that allows you to write, deploy and administer Solidity smart contracts, without the need to install Solidity locally.',
    link: 'https://remix.ethereum.org/',
    src: '/img/ides/remix-etherium.svg',
  },
];
