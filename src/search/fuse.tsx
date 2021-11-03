import Fuse from 'fuse.js';
import { searchList as data } from '@/data/resources';

const options = {
  threshold: 0.2,
  keys: ['title', 'description'],
};
const index = Fuse.createIndex(options.keys, data);

export const search = (pattern: string) => {
  const fuse = new Fuse(data, options, index);
  return fuse.search(pattern).map((result) => result.item);
};
