import { compareStrings } from 'lib/compare';
import ventureCapitalFunds from '@/data/resources/communities/venture-capital-funds.json';
import grantPrograms from '@/data/resources/communities/grant-program.json';
import incubatorsAccelerators from '@/data/resources/communities/incubators-accelerators.json';
import developer from '@/data/resources/communities/developer.json';
import enterprise from '@/data/resources/communities/enterprise.json';
import { Resource } from '../models/resource.model';

export const communities: { tag: string; data: Resource[] }[] = [
  ventureCapitalFunds,
  grantPrograms,
  incubatorsAccelerators,
  developer,
  enterprise,
].map(({ tag, data }) => ({ tag, data: data.sort(compareStrings('title')) }));

export const taggedCommunities = communities.reduce((a, c) => {
  const data = c.data.sort(compareStrings('title')).map((x) => ({ ...x, type: 'Communities', tag: c.tag }));
  a.push(...data);
  return a;
}, []);
