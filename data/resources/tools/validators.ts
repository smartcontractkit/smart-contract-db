export interface Validators {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const validators: Validators[] = [
  {
    id: 'geth',
    title: 'GETH',
    description:
      'Go Ethereum is one of the three original implementations (along with C++ and Python) of the Ethereum protocol. It is written in Go, fully open source and licensed under the GNU LGPL v3.',
    link: 'https://geth.ethereum.org/',
    src: '/img/validators/geth.png',
  },
  {
    id: 'aleth',
    title: 'Aleth',
    description:
      'The collection of C++ libraries and tools for Ethereum, formerly known as cpp-ethereum project. This includes the full Ethereum client aleth.',
    link: 'https://github.com/ethereum/aleth',
    src: '',
  },
  {
    id: 'erigon',
    title: 'Erigon',
    description:
      'Erigon is an implementation of Ethereum (aka "Ethereum client"), on the efficiency frontier, written in Go.',
    link: 'https://github.com/ledgerwatch/erigon',
    src: '/img/validators/erigon.jpg',
  },
  {
    id: 'besu',
    title: 'Besu',
    description:
      'Besu is an open-source Enterprise Ethereum client developed under the Apache 2.0 license and written in Java. It runs on the Ethereum public network, private networks, and test networks.',
    link: 'https://besu.hyperledger.org/en/stable/',
    src: '',
  },
  {
    id: 'nethermind',
    title: 'Nethermind',
    description:
      'Founded in 2017 by a small team of world-class technologists, Nethermind builds Ethereum solutions for developers and enterprises.',
    link: 'https://docs.nethermind.io/nethermind/',
    src: '/img/validators/nethermind.png',
  },
  {
    id: 'substrate',
    title: 'Substrate',
    description:
      'Substrate enables developers to quickly and easily build future-proof blockchains optimized for any use case.',
    link: 'https://www.substrate.io/',
    src: '/img/exchanges/substrate.png',
  },
];
