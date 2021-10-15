export interface Enterprise {
  id: string;
  title: string;
  description: string;
  link: string; // link is external
  src: string; // for image
}

export const enterprise: Enterprise[] = [
  {
    id: 'dora-hacks',
    title: 'DoraHacks',
    description:
      'DoraHacks builds hacker communities around the world and provides recruiting services to its community of talented hackers by connecting them to top enterprises globally through hackathons and its future recruiting platform.',
    link: 'https://dorahacks.com/',
    src: '/img/communities/dora-hacks.jpg',
  },
  {
    id: 'encode-club',
    title: 'Encode.Club',
    description:
      'The blockchain education platform Onboarding, supporting and catalysing the next generation of crypto-natives.',
    link: 'https://www.encode.club/',
    src: '/img/communities/encode-club.jpg',
  },
];
