import * as Validator from './validators.json';

export interface Validators {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const validators: Validators[] = Validator;
