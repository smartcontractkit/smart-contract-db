import ventureCapitalFunds from '@/data/resources/communities/venture-capital-funds.json';
import grantPrograms from '@/data/resources/communities/grant-program.json';
import incubatorsAccelerators from '@/data/resources/communities/incubators-accelerators.json';
import developer from '@/data/resources/communities/developer.json';
import enterprise from '@/data/resources/communities/enterprise.json';
import consultants from '@/data/resources/consultants.json';
import events from '@/data/resources/events.json';
import books from '@/data/resources/education/books.json';
import tutorials from '@/data/resources/education/tutorials.json';
import courses from '@/data/resources/education/courses.json';
import workshops from '@/data/resources/education/workshops.json';
import trainers from '@/data/resources/education/trainers.json';
import schools from '@/data/resources/education/schools.json';
import blockchains from '@/data/resources/tools/blockchain.json';
import ides from '@/data/resources/tools/ides.json';
import frameworks from '@/data/resources/tools/frameworks.json';
import libraries from '@/data/resources/tools/libraries.json';
import exchanges from '@/data/resources/tools/exchanges.json';
import languages from '@/data/resources/tools/languages.json';
import validators from '@/data/resources/tools/validators.json';
import wallets from '@/data/resources/tools/wallets.json';
import test from '@/data/resources/tools/tests.json';
import deploy from '@/data/resources/tools/deploy.json';
import monitoring from '@/data/resources/tools/monitoring.json';
import administration from '@/data/resources/tools/administration.json';
import security from '@/data/resources/tools/security.json';
import { communities } from './communities';

const allCommunitites = communities.reduce((a, c) => {
  const data = c.data.map((x) => ({ ...x, type: 'Communities', tag: c.tag }));
  a.push(...data);
  return a;
}, []);

/**
 * Search prep to show type of category a resource belongs to.
 */
export const resources = [
  ...allCommunitites,
  ...consultants.map((x) => ({ ...x, type: 'Consultants' })),
  ...events.map((x) => ({ ...x, type: 'Events' })),
  ...books.map((x) => ({ ...x, type: 'Books' })),
  ...tutorials.map((x) => ({ ...x, type: 'Tutorials' })),
  ...courses.map((x) => ({ ...x, type: 'Courses' })),
  ...workshops.map((x) => ({ ...x, type: 'Workshops' })),
  ...trainers.map((x) => ({ ...x, type: 'Tutorials' })),
  ...schools.map((x) => ({ ...x, type: 'Schools' })),
  ...blockchains.map((x) => ({ ...x, type: 'Blockchains' })),
  ...ides.map((x) => ({ ...x, type: 'IDEs' })),
  ...frameworks.map((x) => ({ ...x, type: 'Frameworks' })),
  ...libraries.map((x) => ({ ...x, type: 'Libraries' })),
  ...exchanges.map((x) => ({ ...x, type: 'Exchanges' })),
  ...languages.map((x) => ({ ...x, type: 'Languages' })),
  ...validators.map((x) => ({ ...x, type: 'Validators' })),
  ...wallets.map((x) => ({ ...x, type: 'Wallets' })),
  ...test.map((x) => ({ ...x, type: 'Test' })),
  ...deploy.map((x) => ({ ...x, type: 'Deploy' })),
  ...monitoring.map((x) => ({ ...x, type: 'Monitoring' })),
  ...administration.map((x) => ({ ...x, type: 'Administration' })),
  ...security.map((x) => ({ ...x, type: 'Security' })),
];
