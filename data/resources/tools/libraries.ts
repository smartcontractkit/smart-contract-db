export interface Library {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const libraries: Library[] = [
  {
    id: 'hardhat',
    title: 'Hardhat',
    description: 'Ethereum development environment for professionals.',
    link: 'https://hardhat.org/',
    src: '/img/Hardhat-color-logotype-vertical.svg',
  },
  {
    id: 'truffle',
    title: 'Truffle Suite',
    description: 'The Truffle Suite gets developers from idea to dapp as comfortably as possible.',
    link: 'https://www.trufflesuite.com/',
    src: '/img/truffle-logomark.svg',
  },
  {
    id: 'brownie',
    title: 'Brownie',
    description:
      'Brownie is a Python-based development and testing framework for smart contracts targeting the Ethereum Virtual Machine.',
    link: 'https://eth-brownie.readthedocs.io/en/stable/',
    src: '/img/brownie-eth.png',
  },
  {
    id: 'open-zeppelin',
    title: 'OpenZeppelin',
    description:
      'OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards.',
    link: 'https://openzeppelin.com/contracts/',
    src: '/img/open-zepplin.jpg',
  },
];
