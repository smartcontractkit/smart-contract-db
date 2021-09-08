export interface Community {
  title: string;
  description: string;
  link: string;
}

export const communities: { [id: string]: Community } = {};
