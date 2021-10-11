export interface Exchanges {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const exchanges: Exchanges[] = [
  {
    id: 'coinbase',
    title: 'Coinbase',
    description:
      'Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more. Based in the USA, Coinbase is available in over 30 countries worldwide.',
    link: 'https://www.coinbase.com/',
    src: '/img/exchanges/coinbase.jpg',
  },
  {
    id: 'crypto',
    title: 'Crypto.com',
    description:
      'Crypto.com is on a mission to accelerate the world’s transition to cryptocurrency. Through the Crypto.com Mobile App and Exchange, you can buy 150+ cryptocurrencies and stablecoins, such as Bitcoin (BTC), Ethereum (ETH), Cardano (ADA), Solana (SOL) and etc. Purchase with a credit card, debit card, crypto, or fiat bank transfer. Our ecosystem consists of financial services, payment solutions, a world-class trading platform, and decentralised finance offerings.',
    link: 'https://crypto.com/',
    src: '/img/exchanges/crypto-com.png',
  },
  {
    id: 'robinhood',
    title: 'Robinhood',
    description:
      'Robinhood has commission-free investing, and tools to help shape your financial future. Sign up and get your first stock free. Limitations and fees may apply.',
    link: 'https://robinhood.com/',
    src: '/img/exchanges/robinhood.png',
  },
  {
    id: 'paypal',
    title: 'Paypal',
    description:
      'PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account.',
    link: 'https://www.paypal.com/',
    src: '/img/exchanges/paypal.jpg',
  },
  {
    id: 'binance',
    title: 'Binance',
    description:
      'Binance cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume.',
    link: 'https://www.binance.com/',
    src: '/img/exchanges/binance.png',
  },
  {
    id: 'etoro',
    title: 'Etoro',
    description:
      'Buy cryptocurrencies with confidence and copy our top traders. Build your crypto portfolio on eToro, the online trading platform trusted by millions of users.',
    link: 'https://www.etoro.com/',
    src: '/img/exchanges/etoro.png',
  },
  {
    id: 'sofi',
    title: 'Sofi',
    description:
      'Want an easier way to take control of your finances? From getting debt free to growing your investments, we are here to help you get your money right.',
    link: 'https://www.sofi.com/',
    src: '/img/exchanges/sofi.png',
  },
  {
    id: 'kraken',
    title: 'Kraken',
    description:
      'Kraken is more than just a Bitcoin trading platform. Come see why our cryptocurrency exchange is the best place to buy, sell, trade and learn about crypto.',
    link: 'https://www.kraken.com/',
    src: '/img/exchanges/kraken.png',
  },
  {
    id: 'faucets',
    title: 'Faucets',
    description: 'Earn Free Cryptocurrencies : PTC, Offerwalls, Level Up & Achievements System and All In One Place!',
    link: 'https://faucetcrypto.com/',
    src: '/img/exchanges/faucet.png',
  },
  {
    id: 'debridge',
    title: 'Debridge',
    description: 'Cross-Chain Interoperability and Liquidity Transfer Protocol.',
    link: 'https://debridge.finance/',
    src: '/img/exchanges/debridge.png',
  },
  {
    id: 'tornadoCash',
    title: 'TornadoCash',
    description: 'Non-custodial Ethereum Privacy solution.',
    link: 'https://tornado.cash/',
    src: '/img/exchanges/tornado-cash.png',
  },
  {
    id: 'substrate',
    title: 'Substrate',
    description:
      'Substrate enables developers to quickly and easily build future-proof blockchains optimized for any use case.',
    link: 'https://www.substrate.io/',
    src: '/img/exchanges/substrate.png',
  },
];
