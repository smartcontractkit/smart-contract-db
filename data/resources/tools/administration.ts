export interface Administration {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const administration: Administration[] = [
  {
    id: 'open-zepplin-contracts',
    title: 'OpenZepplin Contracts',
    description:
      'OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards.',
    link: 'https://openzeppelin.com/contracts/',
    src: '/img/libraries/open-zepplin.jpg',
  },
  {
    id: 'kaleido',
    title: 'Kaleido',
    description:
      'Manticor is a high-performance Digital Derivatives Trading Platform that provides the features and products that are both expected and required by high-volume, institutional and other sophisticated traders.',
    link: 'https://www.kaleido.io/',
    src: '/img/tools/administration/kaleido.webp',
  },
];
