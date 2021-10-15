export interface Developer {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const developer: Developer[] = [
  {
    id: 'dora-hacks',
    title: 'DoraHacks',
    description:
      'DoraHacks builds hacker communities around the world and provides recruiting services to its community of talented hackers by connecting them to top enterprises globally through hackathons and its future recruiting platform.',
    link: 'https://dorahacks.com/',
    src: '/img/communities/developers/dora-hacks.jpg',
  },
  {
    id: 'reddit',
    title: 'Reddit',
    description: `Reddit is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in on Reddit.`,
    link: 'https://www.reddit.com/',
    src: '/img/communities/developers/reddit.jpg',
  },

  {
    id: 'open-zeppelin-forum',
    title: 'OpenZeppelin Forum',
    description:
      'A place for developers to learn, discuss and explore design patterns and best practices around smart contract development',
    link: 'https://forum.openzeppelin.com/',
    src: '/img/libraries/open-zepplin.jpg',
  },

  {
    id: 'solidity-forum',
    title: 'Solidity Forum',
    description: 'The place to discuss design and usage of and changes to the Solidity programming language.',
    link: 'https://forum.soliditylang.org/',
    src: '/img/languages/solidity-logo.svg',
  },

  {
    id: 'cardano-forum',
    title: 'Cardano Forum',
    description: 'A place for discussing everything about Cardano',
    link: 'https://forum.cardano.org/',
    src: '/img/communities/developers/cardano-forum.jpg',
  },

  {
    id: 'eat-the-blocks-forum',
    title: 'EatTheBlocks Forum',
    description:
      'Community for Blockchain developers. Ethereum, Solidity, Web3, Dapp, Smart contract, DeFi programming',
    link: 'https://forum.eattheblocks.com/',
    src: '/img/communities/developers/eat-the-blocks-forum.jpg',
  },
  {
    id: 'chainlink-discord',
    title: 'Chainlink Discord',
    description: `We're an inclusive, blockchain agnostic community for developers and users of hybrid smart contracts | 23,625 members`,
    link: 'https://discord.com/invite/aSK4zew',
    src: '/img/communities/developers/chainlink.png',
  },
];
