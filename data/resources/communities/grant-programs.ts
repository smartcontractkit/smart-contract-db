export interface GrantPrograms {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const grantPrograms: GrantPrograms[] = [
  {
    id: 'web3-foundation',
    title: 'Web3 Foundation',
    description:
      'Web3 Foundation Nurtures and stewards technologies and applications in the fields of decentralized web software protocols',
    link: 'https://web3.foundation/',
    src: '/img/communities/grant-programs/web3-foundation.png',
  },
  {
    id: 'chainlink',
    title: 'Chainlink',
    description:
      'Chainlink is the most widely used oracle network for powering hybrid smart contracts, enabling any blockchain to securely access off-chain data & computations.',
    link: 'https://chain.link/',
    src: '/img/communities/developers/chainlink.png',
  },
  {
    id: 'solana',
    title: 'Solana',
    description:
      'Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale today.',
    link: 'https://solana.com/',
    src: '/img/communities/grant-programs/solana-docs.png',
  },
  {
    id: 'polkadot',
    title: 'Polkadot',
    description: 'Polkadot empowers blockchain networks to work together under the protection of shared security.',
    link: 'https://polkadot.network/',
    src: '/img/communities/grant-programs/polkadot.jpg',
  },
  {
    id: 'darwinia',
    title: 'Darwinia',
    description:
      'Darwinia Network is a decentralized cross-chain bridge network building on Substrate, which is the “Golden Gate Bridge” of the cross-chain ecology. It provides the safest general bridge solution, connecting Polkadot, Ethereum, TRON and other heterogeneous chains by cross-chain assets transfer and general remote chain call. Also, its main application areas include Defi, cross-chain NFT trading market, games, etc.',
    link: 'https://darwinia.network/',
    src: '/img/communities/grant-programs/darwinia.jpg',
  },
  {
    id: 'moonbeam',
    title: 'Moonbeam',
    description:
      'Moonbeam is a new Polkadot smart contract platform that makes it easy to build natively interoperable blockchain applications.',
    link: 'https://moonbeam.network/',
    src: '/img/communities/grant-programs/moonbeam.jpg',
  },
  {
    id: 'hydra-dx',
    title: 'HydraDX',
    description: 'Cross-chain liquidity protocol built on substrate',
    link: 'https://hydradx.io/',
    src: '/img/communities/grant-programs/hydra-dx.jpg',
  },
  {
    id: 'edgeware-builders-guild',
    title: 'Edgeware Builders Guild',
    description:
      'Edgeware gives blockchain developers an easy-to-use framework to build governance focused smart contracts.',
    link: 'https://edgewa.re/developers',
    src: '/img/communities/grant-programs/edgeware-builders-guild.png',
  },
  {
    id: 'crust-network',
    title: 'Crust Network',
    description:
      'CRUST implements the incentive layer protocol for decentralized storage. It is adaptable to multiple storage layer protocols such as IPFS, and provides support for the application layer. ',
    link: 'https://crust.network/',
    src: '/img/communities/grant-programs/crust-network.jpg',
  },
  {
    id: 'astar',
    title: 'Astar',
    description:
      'Astar is the Polkadot-native dApp hub supporting Ethereum, WebAssembly, dApp Staking, and Layer2 solutions.',
    link: 'https://astar.network/',
    src: '/img/communities/grant-programs/astar.jpg',
  },
];
