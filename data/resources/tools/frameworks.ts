export interface Framework {
  title: string;
  description: string;
  link: string;
}

export const frameworks: { [id: string]: Framework } = {
  stellar: {
    title: 'Stellar',
    description:
      'Stellar is an open-source network for currencies and payments. Stellar makes it possible to create, send and trade digital representations of all forms of money—dollars, pesos, bitcoin, pretty much anything. It’s designed so all the world’s financial systems can work together on a single network.',
    link: 'https://www.stellar.org/?locale=en',
  },
  tezos: {
    title: 'Tezos',
    description:
      'Tezos is an open-source platform that addresses key barriers facing blockchain adoption for assets and applications backed by a global community of validators, researchers, and builders. By design, Tezos embraces long-term upgradability, open participation, collaboration, and smart contract safety.',
    link: 'https://tezos.com/',
  },
  'hyperledger-fabric': {
    title: 'Hyperledger Fabric',
    description:
      'Hyperledger Fabric is intended as a foundation for developing applications or solutions with a modular architecture. Hyperledger Fabric allows components, such as consensus and membership services, to be plug-and-play. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy.',
    link: 'https://www.hyperledger.org/use/fabric',
  },
  'hyperledger-sawtooth': {
    title: 'Hyperledger Sawtooth',
    description:
      'Hyperledger Sawtooth offers a flexible and modular architecture separates the core system from the application domain, so smart contracts can specify the business rules for applications without needing to know the underlying design of the core system.',
    link: 'https://www.hyperledger.org/use/sawtooth',
  },
  'hedera-hashgraph': {
    title: 'Hedera Hashgraph',
    description:
      'Providing a new form of distributed consensus, Hedera Hashgraph platform is lightning secure, fast and fair platform that does not need to compute a heavy proof of work algorithm. Hedera empowers and enables developers to build an entirely new class of decentralized applications that are scalable.',
    link: 'https://hedera.com/',
  },
};
