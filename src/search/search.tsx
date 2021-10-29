import { resources as data } from '@/data/resources';
import { useOutsideClick } from '@/hooks/use-outside-click';
import React, { useRef, useState } from 'react';
import { SearchBox, SearchButton, SearchResults } from './';
import { search } from './fuse';

export const Search: React.FC = () => {
  const searchRef = useRef(null);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const results = search(data, searchTerm);
    setSearchResults(results);
  };

  const clearSearchField = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  useOutsideClick(searchRef, () => {
    clearSearchField();
    setShow(false);
  });

  const openSearchBox = () => {
    setShow(true);
  };

  const closeSearchBox = () => {
    setShow(false);
    clearSearchField();
  };

  return (
    <>
      {show ? (
        <div ref={searchRef}>
          <SearchBox searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} clearSearchField={clearSearchField} />
          {searchTerm ? (
            <SearchResults searchTerm={searchTerm} results={searchResults} closeSearchBox={closeSearchBox} />
          ) : (
            ''
          )}
        </div>
      ) : (
        <SearchButton onClick={openSearchBox} />
      )}
    </>
  );
};
