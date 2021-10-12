export interface Monitoring {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const monitoring: Monitoring[] = [
  {
    id: 'open-zepplin-monitor',
    title: 'OpenZepplin Monitor',
    description:
      'OpenZeppelin Sentinel service allows you to monitor transactions by defining conditions on events, functions, and transaction parameters, and notifying via email, slack, telegram, discord, Autotasks, and more.',
    link: 'https://docs.openzeppelin.com/defender/sentinel',
    src: '/img/libraries/open-zepplin.jpg',
  },
  {
    id: 'tenderly',
    title: 'Tenderly',
    description:
      'Comprehensive Ethereum Developer Platform for real-time monitoring, alerting, debugging, and simulating Smart Contracts.',
    link: 'https://tenderly.co/',
    src: '/img/tools/monitoring/tenderly.png',
  },
  {
    id: 'scout',
    title: 'scout',
    description:
      'A no code platform that enables anyone to analyze the protocol and dApp data on Ethereum. You do not need to write a single line of SQL query or code.',
    link: 'https://scout.cool/',
    src: '/img/tools/monitoring/scout.png',
  },
  {
    id: 'blockscout',
    title: 'Blockscout',
    description:
      'Blockscout is a tool for inspecting and analyzing EVM based blockchains. Blockchain explorer for Ethereum Networks.',
    link: 'https://blockscout.com/xdai/mainnet/',
    src: '/img/tools/monitoring/blockscout.png',
  },
  {
    id: 'corda',
    title: 'Corda',
    description:
      'Corda enables businesses in Banking, Capital Markets, Trade Finance, Insurance and beyond to transact directly and in strict privacy using smart contracts, reducing transaction and record-keeping costs and streamlining business operations..',
    link: 'https://corda.net/',
    src: '/img/tools/monitoring/crda-logo-big.svg',
  },
  {
    id: 'fantom',
    title: 'Fantom',
    description: 'Fantom is a fast, high-throughput open-source smart contract platform for digital assets and dApps.',
    link: 'https://fantom.foundation/',
    src: '/img/tools/monitoring/fantom.png',
  },
];
