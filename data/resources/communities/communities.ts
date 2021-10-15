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
    link: 'https://decenter.org/en',
    src: '/img/communities/community/deCenter.webp',
  },
  {
    id: 'minter-network',
    title: 'Minter Network',
    description: 'A daily news site covering all things crypto and the decentralized web.',
    link: 'https://www.minter.network/bip',
    src: '/img/communities/community/minter-network.webp',
  },
  {
    id: 'bitpam',
    title: 'Bitpam [Discord]',
    description:
      'Bitpam is a friendly community focused in bringing individuals together to learn more about CryptoCurrency and discuss about it.',
    link: 'https://cryptominded.com/resource/bitpam-discord/',
    src: '/img/communities/community/bitpam.webp',
  },
  {
    id: 'crypto-aquarium',
    title: 'Crypto Aquarium',
    description:
      'Community of blockchain and cryptocurrency enthusiasts, miners, developers, investors, and entrepreneurs from all over the world. ',
    link: 'https://twitter.com/cryptoaquarium?lang=en',
    src: '/img/communities/community/crypto-aquarium.webp',
  },
  {
    id: 'unfolded.',
    title: 'unfolded.',
    description: `Here you'll find a brief overview of the most important crypto events. Short and useful.`,
    link: 'https://twitter.com/cryptounfolded?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    src: '/img/communities/community/unfolded.webp',
  },
  {
    id: 'steemit',
    title: 'Steemit',
    description:
      'Social network and content rewards platform that makes the crowd the beneficiaries of the attention economy. ',
    link: 'https://steemit.com/',
    src: '/img/communities/community/steemit.webp',
  },
  {
    id: 'the-crypto-intro',
    title: 'The Crypto Intro',
    description: 'Basic information and foundation on blockchain and Crypto currency by Daniel Drescher.',
    link: 'https://www.goodreads.com/book/show/34137265-blockchain-basics',
    src: '/img/communities/community/the-crypto-intro.webp',
  },
];
