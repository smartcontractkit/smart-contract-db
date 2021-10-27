import * as Tests from './tests.json';

export interface Test {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const test: Test[] = Tests;
