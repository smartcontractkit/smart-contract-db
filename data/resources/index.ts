import { communities } from '@/data/resources/communities/communities';
import * as consultants from '@/data/resources/consultants.json';
import * as events from '@/data/resources/events.json';
import * as books from '@/data/resources/education/books.json';
import * as tutorials from '@/data/resources/education/tutorials.json';
import * as courses from '@/data/resources/education/courses.json';
import * as workshops from '@/data/resources/education/workshops.json';
import * as trainers from '@/data/resources/education/trainers.json';
import * as schools from '@/data/resources/education/schools.json';
import * as blockchains from '@/data/resources/tools/blockchain.json';
import * as ides from '@/data/resources/tools/ides.json';
import * as frameworks from '@/data/resources/tools/frameworks.json';
import * as libraries from '@/data/resources/tools/libraries.json';
import * as exchanges from '@/data/resources/tools/exchanges.json';
import * as languages from '@/data/resources/tools/languages.json';
import * as validators from '@/data/resources/tools/validators.json';
import * as wallets from '@/data/resources/tools/wallets.json';
import * as test from '@/data/resources/tools/tests.json';
import * as deploy from '@/data/resources/tools/deploy.json';
import * as monitoring from '@/data/resources/tools/monitoring.json';
import * as administration from '@/data/resources/tools/administration.json';
import * as security from '@/data/resources/tools/security.json';

export const resources = [
  ...communities[0].map((x) => ({ ...x, type: 'Communities' })),
  // ...consultants.map((x) => ({ ...x, type: 'Consultants' })),
  ...events[0].map((x) => ({ ...x, type: 'Events' })),
  ...books[0].map((x) => ({ ...x, type: 'Books' })),
  ...tutorials[0].map((x) => ({ ...x, type: 'Tutorials' })),
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
