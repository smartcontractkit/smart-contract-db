export interface School {
  title: string;
  description: string;
  link: string;
}

export const schools: { [id: string]: School } = {
  mit: {
    title: 'Massachusetts Institute of Technology (MIT)',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'https://www.mit.edu/',
  },
  cornell: {
    title: 'Cornell University',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'https://www.cornell.edu/',
  },
  harvard: {
    title: 'Harvard University',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'https://www.harvard.edu/',
  },
  'california-berkeley': {
    title: 'University of California, Berkeley',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'https://www.berkeley.edu/',
  },
  oxford: {
    title: 'University of Oxford',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'https://www.ox.ac.uk/',
  },
  singapore: {
    title: 'National University of Singapore',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'https://www.nus.edu.sg/',
  },
  nicosia: {
    title: 'University of Nicosia',
    description:
      'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    link: 'University of Nicosia',
  },
};
