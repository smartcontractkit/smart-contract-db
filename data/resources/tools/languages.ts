export interface Languages {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const languages: Languages[] = [
  {
    id: 'solidity',
    title: 'Solidity',
    description:
      'Solidity is an object-oriented programming language for writing smart contracts. It is used for implementing smart contracts on various blockchain platforms, most notably, Ethereum.',
    link: 'https://docs.soliditylang.org/en/v0.8.9/',
    src: '/img/languages/solidity-logo.svg',
  },
  {
    id: 'vyper',
    title: 'Vyper',
    description:
      'Vyper is a contract-oriented, pythonic programming language that targets the Ethereum Virtual Machine (EVM).',
    link: 'https://vyper.readthedocs.io/en/stable/',
    src: '/img/languages/vyper-logo.svg',
  },
  {
    id: 'serpent',
    title: 'Serpent',
    description:
      'Serpent is an assembly language that compiles to EVM code that is extended with various high-level features. It can be useful for writing code that requires low-level opcode manipulation as well as access to high-level primitives like the ABI.',
    link: '',
    src: '',
  },
];
