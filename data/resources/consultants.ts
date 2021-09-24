export interface Consultant {
  id: string;
  title: string;
  description: string;
  link: string;
  src: string;
}

export const consultants: Consultant[] = [
  {
    id: 'applied-blockchain',
    title: 'Applied Blockchain',
    description: 'We build applications with added trust and data privacy',
    link: 'https://appliedblockchain.com/',
    src: '/img/applied-blockchain.svg',
  },
  {
    id: 'block-42',
    title: 'Block42',
    description:
      'Block42 is investing into the most promising decentralized blockchain ecosystems and help them grow and secure their networks by developing products on top of them.',
    link: 'https://block42.tech/',
    src: '/img/block42.svg',
  },
  {
    id: 'chainsafe',
    title: 'Chainsafe',
    description: 'The only blockchain R&D firm with a multi-chain perspective.',
    link: 'https://chainsafe.io/',
    src: '/img/chainsafe.png',
  },
  {
    id: 'hack-bg',
    title: 'Hack',
    description:
      'Blockchain Consulting, technical development for Initial Coin Offerings and Decentralized Applications, Public and Private Blockchain Development. ',
    link: 'https://hack.bg',
    src: '/img/hack.svg',
  },
  {
    id: 'protofire',
    title: 'Protofire',
    description:
      'Protofire is a team of engineers, which helps decentralized protocols and developer platforms to accelerate growth of their ecosystems.',
    link: 'https://protofire.io/',
    src: '/img/protofire.svg',
  },
  {
    id: 'this-dot-labs',
    title: 'This Dot Labs',
    description:
      'Provides architectural guidance, staff augmentation, on demand Subject Matter Experts, temporary CTOs, one-on-one pairing, mentorship, and open source strategy support.',
    link: 'https://www.thisdot.co/',
    src: '/img/this-dot-labs.svg',
  },
];
