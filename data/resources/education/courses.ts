export interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const courses: Course[] = [
  {
    id: 'coursera-blockchain-specialization',
    title: 'Blockchain Specialization',
    description: '',
    link: 'https://www.coursera.org/specializations/blockchain',
    src: '',
  },
  {
    id: 'ethereum-and-solidity-the-complete-developers-guide',
    title: "Ethereum and Solidity: The Complete Developer's Guide",
    description: 'Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain',
    link: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/',
    src: '',
  },
  {
    id: 'getting-started-with-ethereum-solidity-development',
    title: 'Become a Blockchain Developer with Ethereum and Solidity',
    description: '',
    link: 'https://www.udemy.com/course/getting-started-with-ethereum-solidity-development/',
    src: '',
  },
  {
    id: 'ivan-on-tech',
    title: 'Ivan on Tech',
    description:
      'Become a Highly-Paid Professional in Months! 30+ Industry-Recognized Blockchain & Cryptocurrencies Certification Courses. Learn More!',
    link: 'https://academy.ivanontech.com/',
    src: '/img/courses/ivan-on-tech.svg',
  },
];