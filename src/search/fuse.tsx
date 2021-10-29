import Fuse from 'fuse.js';

export const search = (data: any[], pattern: string) => {
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['title', 'description'],
  };

  const index = Fuse.createIndex(options.keys, data);
  const fuse = new Fuse(data, options, index);

  return fuse.search(pattern).map((result) => result.item);
};
