export interface Wallets {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const wallets: Wallets[] = [
  {
    id: 'metamask',
    title: 'Metamask',
    description: 'MetaMask - A crypto wallet & gateway to blockchain apps',
    link: 'https://metamask.io/',
    src: '/img/wallets/metamask.png',
  },
  {
    id: 'trezor',
    title: 'Trezor',
    description:
      'Discover the secure vault for your digital assets. Store bitcoins, litecoins, passwords, logins, and keys without worries.',
    link: 'https://trezor.io/',
    src: '/img/wallets/trezor.png',
  },
  {
    id: 'myEtherWallet',
    title: 'MyEtherWallet',
    description:
      'MyEtherWallet (MEW) is a free, open-source, client-side interface for generating Ethereum wallets & more. Interact with the Ethereum blockchain easily & securely.',
    link: 'https://www.myetherwallet.com/',
    src: '/img/wallets/myetherwallet.png',
  },
  {
    id: 'ledger',
    title: 'Ledger',
    description:
      'Secure your crypto assets such as Bitcoin, Ethereum, XRP, Monero and more. Give yourself peace of mind by knowing that your cryptocurrencies are safe',
    link: 'https://www.ledger.com/',
    src: '/img/wallets/ledger.png',
  },
  {
    id: 'myCrypto',
    title: 'MyCrypto',
    description:
      'Securely manage ALL of your crypto accounts with MyCrypto. Swap, send, and buy crypto with your favorite wallets like Ledger, Metamask, and Trezor.',
    link: 'https://mycrypto.com/',
    src: '/img/wallets/mycrypto.png',
  },
];
