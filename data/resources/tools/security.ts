export interface Security {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const security: Security[] = [
  {
    id: 'slither',
    title: 'Slither',
    description:
      'Slither is a Solidity static analysis framework written in Python 3. It runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses.',
    link: 'https://blog.trailofbits.com/2018/10/19/slither-a-solidity-static-analysis-framework/',
    src: '/img/tools/security/slither.png',
  },
  {
    id: 'manticor',
    title: 'Manticor',
    description:
      'Manticor is a high-performance Digital Derivatives Trading Platform that provides the features and products that are both expected and required by high-volume, institutional and other sophisticated traders.',
    link: 'https://www.manticor.io/',
    src: '/img/tools/security/manticor.jpeg',
  },
  {
    id: 'mythril',
    title: 'Mythril',
    description: 'Mythril is a security analysis tool for Ethereum smart contracts.',
    link: 'https://mythril-classic.readthedocs.io/en/master/index.html',
    src: '',
  },
  {
    id: 'open-zepplin-defender',
    title: 'OpenZepplin Defender',
    description:
      'Automate your smart contract operations to deliver high-quality products faster with lower risk to users.',
    link: 'https://openzeppelin.com/defender/',
    src: '/img/libraries/open-zepplin.jpg',
  },
];
