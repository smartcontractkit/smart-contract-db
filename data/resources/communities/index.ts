import ventureCapitalFunds from '@/data/resources/communities/venture-capital-funds.json';
import grantPrograms from '@/data/resources/communities/grant-program.json';
import incubatorsAccelerators from '@/data/resources/communities/incubators-accelerators.json';
import developer from '@/data/resources/communities/developer.json';
import enterprise from '@/data/resources/communities/enterprise.json';
import { TaggedResource } from '../models/resource.model';

export const communities: TaggedResource[] = [
  ventureCapitalFunds,
  grantPrograms,
  incubatorsAccelerators,
  developer,
  enterprise,
];
