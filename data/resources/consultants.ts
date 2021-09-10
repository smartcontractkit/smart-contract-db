export interface Consultant {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const consultants: Consultant[] = [
  {
    id: 'applied-blockchain',
    title: 'Applied Blockchain',
    description: '',
    link: 'https://appliedblockchain.com/',
  },
  {
    id: 'block-42',
    title: 'Block42',
    description: '',
    link: 'https://block42.tech/',
  },
  {
    id: 'chainsafe',
    title: 'Chainsafe',
    description: '',
    link: 'https://chainsafe.io/',
  },
  {
    id: 'hack-bg',
    title: 'Hack',
    description: '',
    link: 'https://hack.bg',
  },
  {
    id: 'protofire',
    title: 'Protofire',
    description: '',
    link: 'https://protofire.io/',
  },
  {
    id: 'this-dot-labs',
    title: 'This Dot Labs',
    description: '',
    link: 'https://www.thisdot.co/',
  },
];
