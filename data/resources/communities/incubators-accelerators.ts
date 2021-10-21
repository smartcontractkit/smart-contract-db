export interface IncubatorAccelerator {
  'Incubators / Accelerators': IncubatorsAccelerators[];
}

interface IncubatorsAccelerators {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const incubatorsAccelerators: IncubatorAccelerator[] = [
  {
    'Incubators / Accelerators': [
      {
        id: 'rhapsody-ventures',
        title: 'Rhapsody Ventures',
        description:
          'Our due diligence process is a commercial collaboration. If your technology is ready to be demonstrated, we will take you to potential customers and partners to jointly substantiate the market opportunity.',
        link: 'https://rhapsodyvp.com/',
        src: '/img/communities/incubators-accelerators/rhapsody-ventures.png',
      },
      {
        id: 'binance-labs',
        title: 'Binance Labs',
        description:
          'Binance Labs identifies, invests, and empowers viable blockchain entrepreneurs, startups, and communities, providing financing to industry projects that help grow the larger blockchain ecosystem.',
        link: 'https://labs.binance.com/',
        src: '/img/exchanges/binance.png',
      },
      {
        id: 'coinbase-ventures',
        title: 'Coinbase Ventures',
        description:
          'Empowering The Open Financial System Coinbase Ventures invests in companies building the open financial system.',
        link: 'https://ventures.coinbase.com/',
        src: '/img/exchanges/coinbase.jpg',
      },
      {
        id: 'blockchain-centres-blockchain-engine',
        title: `Blockchain Centre's Blockchain Engine`,
        description:
          'Block Engine is a structured incubator program focused on supporting early stage start-ups in the emerging area of blockchain technology.',
        link: 'https://blockchaincentre.com.au/incubator/',
        src: '/img/communities/incubators-accelerators/blockchain-centres-blockchain-engine.jpg',
      },
      {
        id: 'huobi-labs-incubator-program',
        title: 'Huobi Labs Incubator Program',
        description:
          'Huobi Eco is the ecosystem for Huobi Group, building around exchange business,using HT as its token,and investing and cooperating in the upstream and downstream blockchain industry.',
        link: 'https://eco.huobi.com/en-index.html',
        src: '/img/communities/incubators-accelerators/huobi-labs-incubator-program.jpg',
      },
      {
        id: 'catena',
        title: 'CATENA',
        description: 'Catena Capital: ICO Incubator &amp; Blockchain Fund',
        link: 'https://www.catena-capital.com/',
        src: '/img/communities/incubators-accelerators/catena.jpg',
      },
      {
        id: 'y-combinator',
        title: 'Y Combinator',
        description:
          'Y Combinator created a new model for funding early stage startups. Twice a year we invest in a large number of startups.',
        link: 'https://www.ycombinator.com/',
        src: '/img/communities/incubators-accelerators/y-combinator.png',
      },
      {
        id: 'r3-venture-program',
        title: 'R3 Venture Program',
        description:
          'R3 offers a variety of resources and support to blockchain startups and entrepreneurs at every stage of their journey to help shorten their time to market and dramatically increase their odds of long-term success.',
        link: 'https://www.r3.com/venture-development/',
        src: '/img/communities/incubators-accelerators/r3-venture-program.jpg',
      },
      {
        id: 'dlab',
        title: 'dlab',
        description: `SOSV's blockchain venture studio, providing capital and resources for startups exploring new frontiers in decentralization and blockchain technology.`,
        link: 'https://dlab.vc/',
        src: '/img/communities/incubators-accelerators/dlab.png',
      },
    ],
  },
];
