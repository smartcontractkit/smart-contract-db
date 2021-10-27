import * as Deploys from './deploy.json';

export interface Deploy {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const deploy: Deploy[] = Deploys;
