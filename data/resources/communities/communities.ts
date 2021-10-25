import { ventureCapitalFunds, VentureCapital } from '@/data/resources/communities/venture-capital-funds';
import { grantPrograms, GrantProgram } from '@/data/resources/communities/grant-programs';
import { incubatorsAccelerators, IncubatorAccelerator } from '@/data/resources/communities/incubators-accelerators';
import { developer, Developer } from '@/data/resources/communities/developer';
import { enterprise, Enterprise } from '@/data/resources/communities/enterprise';

export const communities: (VentureCapital | GrantProgram | IncubatorAccelerator | Developer | Enterprise)[] = [
  ...ventureCapitalFunds,
  ...grantPrograms,
  ...incubatorsAccelerators,
  ...developer,
  ...enterprise,
];
