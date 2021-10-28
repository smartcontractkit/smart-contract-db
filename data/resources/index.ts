import { communities } from './communities/communities';
import { consultants } from './consultants';
import { events } from './events';
import { books } from './education/books';
import { tutorials } from './education/tutorials';
import { courses } from './education/courses';
import { workshops } from './education/workshops';
import { trainers } from './education/trainers';
import { schools } from './education/schools';
import { blockchains } from './tools/blockchains';
import { ides } from './tools/ides';
import { frameworks } from './tools/frameworks';
import { libraries } from './tools/libraries';
import { exchanges } from './tools/exchanges';
import { languages } from './tools/languages';
import { validators } from './tools/validators';
import { wallets } from './tools/wallets';
import { test } from './tools/test';
import { deploy } from './tools/deploy';
import { monitoring } from './tools/monitoring';
import { administration } from './tools/administration';
import { security } from './tools/security';

export const resources = [
  ...communities.map((x) => ({ ...x, type: 'Communities' })),
  // ...consultants.map((x) => ({ ...x, type: 'Consultants' })),
  ...events.map((x) => ({ ...x, type: 'Events' })),
  ...books.map((x) => ({ ...x, type: 'Books' })),
  ...tutorials.map((x) => ({ ...x, type: 'Tutorials' })),
  // ...courses.map((x) => ({ ...x, type: 'Courses' })),
  // ...workshops.map((x) => ({ ...x, type: 'Workshops' })),
  // ...trainers.map((x) => ({ ...x, type: 'Tutorials' })),
  // ...schools.map((x) => ({ ...x, type: 'Schools' })),
  // ...blockchains.map((x) => ({ ...x, type: 'Blockchains' })),
  // ...ides.map((x) => ({ ...x, type: 'IDEs' })),
  // ...frameworks.map((x) => ({ ...x, type: 'Frameworks' })),
  // ...libraries.map((x) => ({ ...x, type: 'Libraries' })),
  // ...exchanges.map((x) => ({ ...x, type: 'Exchanges' })),
  // ...languages.map((x) => ({ ...x, type: 'Languages' })),
  // ...validators.map((x) => ({ ...x, type: 'Validators' })),
  // ...wallets.map((x) => ({ ...x, type: 'Wallets' })),
  // ...test.map((x) => ({ ...x, type: 'Test' })),
  // ...deploy.map((x) => ({ ...x, type: 'Deploy' })),
  // ...monitoring.map((x) => ({ ...x, type: 'Monitoring' })),
  // ...administration.map((x) => ({ ...x, type: 'Administration' })),
  // ...security.map((x) => ({ ...x, type: 'Security' })),
];
