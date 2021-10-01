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
    src: '',
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
    src: '',
  },
];
