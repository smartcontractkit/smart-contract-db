export interface Course {
  title: string;
  description: string;
  link: string;
}

export const courses: { [id: string]: Course } = {
  'coursera-blockchain-specialization': {
    title: 'Blockchain Specialization',
    description: '',
    link: 'https://www.coursera.org/specializations/blockchain',
  },
  'ethereum-and-solidity-the-complete-developers-guide': {
    title: "Ethereum and Solidity: The Complete Developer's Guide",
    description: 'Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain',
    link: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/',
  },
  'getting-started-with-ethereum-solidity-development': {
    title: 'Become a Blockchain Developer with Ethereum and Solidity',
    description: '',
    link: 'https://www.udemy.com/course/getting-started-with-ethereum-solidity-development/',
  },
};
