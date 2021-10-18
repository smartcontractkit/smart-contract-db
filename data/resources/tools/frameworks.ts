export interface Framework {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const frameworks: Framework[] = [
  {
    id: 'stellar',
    title: 'Stellar',
    description:
      'Stellar is an open-source network for currencies and payments. Stellar makes it possible to create, send and trade digital representations of all forms of money—dollars, pesos, bitcoin, pretty much anything. It’s designed so all the world’s financial systems can work together on a single network.',
    link: 'https://www.stellar.org/?locale=en',
    src: '/img/tools/frameworks/stellar.png',
  },
  {
    id: 'tezos',
    title: 'Tezos',
    description:
      'Tezos is an open-source platform that addresses key barriers facing blockchain adoption for assets and applications backed by a global community of validators, researchers, and builders. By design, Tezos embraces long-term upgradability, open participation, collaboration, and smart contract safety.',
    link: 'https://tezos.com/',
    src: '/img/tools/frameworks/tezos.png',
  },
  {
    id: 'hyperledger-fabric',
    title: 'Hyperledger Fabric',
    description:
      'Hyperledger Fabric is intended as a foundation for developing applications or solutions with a modular architecture. Hyperledger Fabric allows components, such as consensus and membership services, to be plug-and-play. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy.',
    link: 'https://www.hyperledger.org/use/fabric',
    src: '/img/tools/frameworks/hyperledger-fabric.png',
  },
  {
    id: 'hyperledger-sawtooth',
    title: 'Hyperledger Sawtooth',
    description:
      'Hyperledger Sawtooth offers a flexible and modular architecture separates the core system from the application domain, so smart contracts can specify the business rules for applications without needing to know the underlying design of the core system.',
    link: 'https://www.hyperledger.org/use/sawtooth',
    src: '/img/tools/frameworks/hyperledger-sawtooth.png',
  },
  {
    id: 'hedera-hashgraph',
    title: 'Hedera Hashgraph',
    description:
      'Providing a new form of distributed consensus, Hedera Hashgraph platform is lightning secure, fast and fair platform that does not need to compute a heavy proof of work algorithm. Hedera empowers and enables developers to build an entirely new class of decentralized applications that are scalable.',
    link: 'https://hedera.com/',
    src: '/img/tools/frameworks/hedera-hashgraph.png',
  },
  {
    id: 'hardhat',
    title: 'Hardhat',
    description: 'Ethereum development environment for professionals.',
    link: 'https://hardhat.org/',
    src: '/img/libraries/Hardhat-color-logotype-vertical.svg',
  },
  {
    id: 'truffle',
    title: 'Truffle Suite',
    description:
      'World class development environment for blockchain dapps (decentralized applications) and smart contracts. Learn blockchain programming with our training courses & seminars. Trusted by Microsoft, Shapeshift and more!',
    link: 'https://www.trufflesuite.com/',
    src: '/img/deploy/truffle.png',
  },
  {
    id: 'brownie',
    title: 'Brownie',
    description:
      'Brownie is a Python-based development and testing framework for smart contracts targeting the Ethereum Virtual Machine.',
    link: 'https://eth-brownie.readthedocs.io/en/stable/',
    src: '/img/libraries/brownie-eth.png',
  },
  {
    id: 'open-zepplin-contracts',
    title: 'OpenZepplin Contracts',
    description:
      'OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards.',
    link: 'https://openzeppelin.com/contracts/',
    src: '/img/libraries/open-zepplin.jpg',
  },
  {
    id: 'waffle',
    title: 'Waffle',
    description: 'The most advanced framework for testing smart contracts',
    link: 'https://getwaffle.io/',
    src: '/img/tools/frameworks/waffle.png',
  },
  {
    id: 'py-evm',
    title: 'Py-EVM',
    description: 'Py-EVM is a new implementation of the Ethereum Virtual Machine (EVM) written in Python.',
    link: 'https://py-evm.readthedocs.io/en/latest/',
    src: '',
  },
  {
    id: 'embark',
    title: 'Embark',
    description: 'The all-in-one developer platform for building and deploying decentralized applications.',
    link: 'https://framework.embarklabs.io/',
    src: '/img/tools/frameworks/embark.png',
  },
  {
    id: 'ganache',
    title: 'Ganache',
    description:
      'Deploy contracts, develop your decentralized applications (dapps), and run tests on smart contracts. Available as a desktop application & command-line tool.',
    link: 'https://www.trufflesuite.com/ganache',
    src: '/img/tools/frameworks/ganache.png',
  },
  {
    id: 'dapp-tools',
    title: 'Dapp Tools',
    description: 'Command line tools and smart contract libraries for Ethereum smart contract development',
    link: 'https://dapp.tools/',
    src: '',
  },
  {
    id: 'epirus',
    title: 'Epirus',
    description:
      'The Epirus Explorer provides all of the business metrics you need to support your blockchain and smart contract applications.',
    link: 'https://www.web3labs.com/epirus-explorer',
    src: '/img/tools/frameworks/epirus.png',
  },
  {
    id: 'solidity-template',
    title: 'Solidity Template',
    description: 'Template for building testing and deploying solidity smart contracts',
    link: 'https://github.com/PaulRBerg/solidity-template',
    src: '/img/languages/solidity-logo.svg',
  },
  {
    id: 'one-click-dapp',
    title: 'One Click dApp',
    description:
      'We know blockchain development can be hard. We built this tool to shorten the gap between idea and prototype',
    link: 'https://oneclickdapp.com/',
    src: '/img/tools/frameworks/dapp.png',
  },
  {
    id: 'cosm-wasm',
    title: 'CosmWasm',
    description: 'Build your robust dApps on secure, multi-chain smart contracts!',
    link: 'https://cosmwasm.com/',
    src: '/img/tools/frameworks/cosm-wasm.jpg',
  },
  {
    id: 'moralis',
    title: 'Moralis',
    description:
      'Join 5,000+ blockchain projects that use Moralis software and APIs to build & scale their dApps without the cost & complexity. Try risk-free!',
    link: 'https://moralis.io/',
    src: '/img/tools/frameworks/moralis.png',
  },
  {
    id: 'use-dapp',
    title: 'UseDapp',
    description: 'Framework for rapid DApp development.',
    link: 'https://usedapp.io/',
    src: '',
  },
  {
    id: 'react',
    title: 'React',
    description: 'React – A JavaScript library for building user interfaces',
    link: 'https://reactjs.org/',
    src: '/img/tools/frameworks/react.png',
  },
  {
    id: 'next-js',
    title: 'NextJS',
    description:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    link: 'https://nextjs.org/',
    src: '/img/tools/frameworks/nextjs.png',
  },
  {
    id: 'angular',
    title: 'Angular',
    description:
      'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.',
    link: 'https://angular.io/',
    src: '/img/tools/frameworks/angular.png',
  },
  {
    id: 'scaffold-eth',
    title: 'Scaffold-eth',
    description:
      'Scaffold-eth provides an off-the-shelf stack for rapid prototyping on Ethereum, giving developers access to state-of-the-art tools to quickly learn and ship an Ethereum-based dApp.',
    link: 'https://docs.scaffoldeth.io/scaffold-eth/',
    src: '/img/tools/frameworks/scaffold-eth.png',
  },
  {
    id: 'nethereum',
    title: 'Nethereum',
    description:
      'An open source .NET integration library for Ethereum. Build cross-platform blockchain applications. Nethereum provides modular libraries for using Ethereum smart contracts, cryptographic wallets, building decentralized apps and managing blockchain data in .NET.',
    link: 'https://nethereum.com/',
    src: '',
  },
  {
    id: 'alchemy-build',
    title: 'Alchemy Build',
    description: `Whether you're a beginner, working on a side project, or one of the largest teams in the blockchain space, Alchemy makes Ethereum development easy with enhanced APIs, node infrastructure, and developer tooling. Get started for free!`,
    link: 'https://www.alchemy.com/',
    src: '/img/tools/frameworks/alchemy-build.jpg',
  },
  {
    id: 'infura',
    title: 'Infura',
    description: `Infura's development suite provides instant, scalable API access to the Ethereum and IPFS networks. Connect your app to Ethereum and IPFS now, for free!`,
    link: 'https://infura.io/',
    src: '/img/deploy/infura.jpg',
  },
  {
    id: 'web3-react',
    title: 'Web3 React',
    description: 'A simple, maximally extensible, dependency minimized framework for building modern Ethereum dApps',
    link: 'https://github.com/NoahZinsmeister/web3-react',
    src: '',
  },
  {
    id: 'create-eth-app',
    title: 'Create-eth-app',
    description: 'Kickstart your dapp frontend development with create-eth-app | ethereum.org',
    link: 'https://ethereum.org/en/developers/tutorials/kickstart-your-dapp-frontend-development-wth-create-eth-app/',
    src: '',
  },
  {
    id: 'aragon',
    title: 'Aragon',
    description: 'Frictionless DAO creation and governance, powered by Aragon. Changing the world starts here.',
    link: 'https://aragon.org/',
    src: 'img/tools/frameworks/aragon.svg',
  },
  {
    id: 'cosmos',
    title: 'Cosmos',
    description:
      'Cosmos is an ever-expanding ecosystem of interoperable and sovereign blockchain apps and services, built for a decentralized future.',
    link: 'https://cosmos.network/',
    src: '/img/tools/frameworks/cosmos.png',
  },
  {
    id: 'the-graph',
    title: 'TheGraph',
    description:
      'The Graph is an indexing protocol for organizing blockchain data and making it easily accessible with GraphQL.',
    link: 'https://thegraph.com/en/',
    src: '/img/tools/frameworks/the-graph.jpg',
  },
];
