import { useMediaQuery } from '@/hooks/media-query';
import { useOutsideClick } from '@/hooks/use-outside-click';
import React, { useState } from 'react';
import { Modal } from 'src/shared/modal';
import { SearchBox, SearchButton, SearchResults } from './';
import { search } from './fuse';
import styles from './search.module.css';

export const Search: React.FC = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const isMobile = useMediaQuery(640);

  const handleSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const results = search(searchTerm);
    setSearchResults(results);
  };

  const clearSearchField = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const onClose = () => {
    clearSearchField();
    setShow(false);
  };

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
        <Modal show={show} onClose={onClose} modalStyles={styles.searchbox_position}>
          <SearchBox
            searchTerm={searchTerm}
            isMobile={isMobile}
            handleSearchTerm={handleSearchTerm}
            clearSearchField={clearSearchField}
            onClose={onClose}
          />
          {searchTerm ? (
            <SearchResults
              searchTerm={searchTerm}
              isMobile={isMobile}
              results={searchResults}
              closeSearchBox={closeSearchBox}
            />
          ) : (
            ''
          )}
        </Modal>
      ) : (
        <SearchButton onClick={openSearchBox} />
      )}
    </>
  );
};
