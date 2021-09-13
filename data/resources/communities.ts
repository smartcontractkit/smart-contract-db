export interface Community {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const communities: Community[] = [
  {
    id: 'decenter',
    title: 'DeCenter',
    description:
      'We start each morning with a newsletter covering fresh news and then post analytical and educational articles for crypto enthusiasts of all levels of expertise throughout the day. ',
    link: '',
    src: '/img/deCenter.svg',
  },
  {
    id: 'minter-network',
    title: 'Minter Network',
    description: 'A daily news site covering all things crypto and the decentralized web.',
    link: '',
    src: '/img/minter-network.svg',
  },
  {
    id: 'bitpam',
    title: 'Bitpam [Discord]',
    description:
      'Bitpam is a friendly community focused in bringing individuals together to learn more about CryptoCurrency and discuss about it.',
    link: '',
    src: '/img/bitpam.svg',
  },
  {
    id: 'crypto-aquarium',
    title: 'Crypto Aquarium',
    description:
      'Community of blockchain and cryptocurrency enthusiasts, miners, developers, investors, and entrepreneurs from all over the world. ',
    link: '',
    src: '/img/crypto-aquarium.svg',
  },
  {
    id: 'unfolded.',
    title: 'unfolded.',
    description: `Here you'll find a brief overview of the most important crypto events. Short and useful.`,
    link: '',
    src: '/img/unfolded.svg',
  },
  {
    id: 'steemit',
    title: 'Steemit',
    description:
      'Social network and content rewards platform that makes the crowd the beneficiaries of the attention economy. ',
    link: '',
    src: '/img/steemit.svg',
  },
  {
    id: 'the-crypto-intro',
    title: 'The Crypto Intro',
    description: 'Basic information and foundation on blockchain and Crypto currency by Daniel Drescher.',
    link: '',
    src: '/img/the-crypto-intro.svg',
  },
];
