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
    src: '/img/libraries/Hardhat-color-logotype-vertical.svg',
  },
  {
    id: 'truffle',
    title: 'Truffle Suite',
    description: 'The Truffle Suite gets developers from idea to dapp as comfortably as possible.',
    link: 'https://www.trufflesuite.com/',
    src: '/img/libraries/truffle-logomark.svg',
  },
  {
    id: 'brownie',
    title: 'Brownie',
    description:
      'Brownie is a Python-based development and testing framework for smart contracts targeting the Ethereum Virtual Machine.',
    link: 'https://eth-brownie.readthedocs.io/en/stable/',
    src: '/img/libraries/brownie-eth.png',
  },
  {
    id: 'open-zeppelin',
    title: 'OpenZeppelin',
    description:
      'OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards.',
    link: 'https://openzeppelin.com/contracts/',
    src: '/img/libraries/open-zepplin.jpg',
  },
  {
    id: 'web3-js',
    title: 'Web3.js',
    description:
      'web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.',
    link: 'https://web3js.readthedocs.io/en/v1.3.0/#',
    src: '/img/libraries/web3-js.jpg',
  },
  {
    id: 'web3-py',
    title: 'Web3.py',
    description: 'Web3.py is a Python library for interacting with Ethereum.',
    link: 'https://web3py.readthedocs.io/en/stable/',
    src: '/img/libraries/py.png',
  },
  {
    id: 'open-ethereum',
    title: 'OpenEthereum',
    description: 'Fast and feature-rich ethereum client.',
    link: 'https://openethereum.org/',
    src: '/img/libraries/open-ethereum.png',
  },
  {
    id: 'ethers-js',
    title: 'ethers.js',
    description:
      'The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.',
    link: 'https://docs.ethers.io/v5/',
    src: '/img/libraries/ethers-js.png',
  },
];
