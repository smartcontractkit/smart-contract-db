import { ventureCapitalFunds, VentureCapital } from '@/data/resources/communities/venture-capital-funds';
import { grantPrograms, GrantProgram } from '@/data/resources/communities/grant-programs';
import { incubatorsAccelerators, IncubatorAccelerator } from '@/data/resources/communities/incubators-accelerators';
import { developer, Developer } from '@/data/resources/communities/developer';
import { enterprise, Enterprise } from '@/data/resources/communities/enterprise';

export const communities: (VentureCapital | GrantProgram | IncubatorAccelerator | Developer | Enterprise)[] = [
  Object.values(ventureCapitalFunds[0]),
  Object.values(grantPrograms[0]),
  Object.values(incubatorsAccelerators[0]),
  Object.values(developer[0]),
  Object.values(enterprise[0]),
];
