import * as ventureCapitalFunds from '@/data/resources/communities/venture-capital-funds.json';
import * as grantPrograms from '@/data/resources/communities/grant-program.json';
import * as incubatorsAccelerators from '@/data/resources/communities/incubators-accelerators.json';
import * as developer from '@/data/resources/communities/developer.json';
import * as enterprise from '@/data/resources/communities/enterprise.json';

export const communities = [
  Object.values(ventureCapitalFunds[0]),
  Object.values(grantPrograms[0]),
  Object.values(incubatorsAccelerators[0]),
  Object.values(developer[0]),
  Object.values(enterprise[0]),
];
