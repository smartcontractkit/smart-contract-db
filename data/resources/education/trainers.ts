// Can be excluded for initial launch
export interface Trainer {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const trainers: Trainer[] = [
  {
    id: 'encode-club',
    title: 'Encode Club',
    description: 'Onboarding, supporting and catalysing the next generation of crypto-natives.',
    link: 'https://www.encode.club/',
    src: '/img/trainers/encode_club.jpg',
  },
];
