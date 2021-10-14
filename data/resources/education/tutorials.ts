// Can be excluded for initial launch
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const tutorials: Tutorial[] = [
  {
    id: 'consensys',
    title: 'Consensys',
    description:
      'It’s time to assemble. Start exploring and building towards your Ethereum developer journey. We have everything you need to begin.',
    link: 'https://consensys.net/developers/',
    src: '/img/tutorials/consensys.jpg',
  },
  {
    id: 'eth-build',
    title: 'ETH.Build',
    description: 'An Educational Sandbox For Web3... And Much More.',
    link: 'https://eth.build/',
    src: '',
  },
  {
    id: 'free-code-camp',
    title: 'freeCodeCamp',
    description: 'Learn to code — for free. Build projects. Earn certifications.',
    link: 'https://www.freecodecamp.org/news/search/?query=smart%20contracts',
    src: '/img/tutorials/freecodecamp.png',
  },
  {
    id: 'solana-docs',
    title: 'Solana Docs',
    description:
      'Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale today.',
    link: 'https://docs.solana.com/',
    src: '/img/tutorials/solana-docs.png',
  },
  {
    id: 'solidity-docs',
    title: 'Solidity Docs',
    description:
      'Solidity is an object-oriented programming language for writing smart contracts. It is used for implementing smart contracts on various blockchain platforms, most notably, Ethereum.',
    link: 'https://docs.soliditylang.org/en/v0.8.9/',
    src: '/img/languages/solidity-logo.svg',
  },
  {
    id: 'learn-x-in-y-minutes',
    title: 'Learn X in Y Minutes',
    description: 'Learn X in Y Minutes: Scenic Programming Language Tours',
    link: 'https://learnxinyminutes.com/',
    src: '/img/tutorials/learn-x-in-y-minutes.png',
  },
  {
    id: 'wikipedia',
    title: 'Wikipedia',
    description: 'Wikipedia, the free encyclopedia',
    link: 'https://en.wikipedia.org/wiki/Main_Page',
    src: '/img/tutorials/wikipedia.png',
  },
  {
    id: 'ethereum-foundation',
    title: 'Ethereum Foundation',
    description:
      'Learn about the Ethereum Foundation (EF), a non-profit organization dedicated to supporting Ethereum and related technologies.',
    link: 'https://ethereum.org/en/foundation/',
    src: '/img/tutorials/ethereum-foundation.png',
  },
  {
    id: 'you-tube',
    title: 'YouTube',
    description:
      'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
    link: 'https://www.youtube.com/',
    src: '/img/tutorials/youTube.png',
  },
  {
    id: 'cryto-zombies',
    title: 'CrytoZombies',
    description:
      'CryptoZombies is The Most Popular, Interactive Solidity Tutorial That Will Help You Learn Blockchain Programming on Ethereum by Building Your Own Fun Game with Zombies — Master Blockchain Development with Web3, Infura, Metamask & Ethereum Smart Contractsand Become a Blockchain Developer in Record Time!.',
    link: 'https://cryptozombies.io/',
    src: '/img/tutorials/crytoZombies.png',
  },
  {
    id: 'chainshot',
    title: 'Chainshot',
    description:
      'Fast-track your Ethereum Developer career in an instructor-led and challenging bootcamp focused on discussion and application!',
    link: 'https://www.chainshot.com/',
    src: '/img/tutorials/chainshot.png',
  },
];
