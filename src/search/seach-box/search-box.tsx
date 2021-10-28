import React, { useRef, useState } from 'react';
import { Icon } from 'src/shared/icon';
import styles from './search-box.module.css';
import classNames from 'classnames';

type SearchBoxProps = {
  searchTerm: string;
  handleSearchTerm: (searchTerm: string) => void;
  clearSearchField: () => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, handleSearchTerm, clearSearchField }) => {
  const inputRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const onChange = (event) => {
    setDisabled(!event.target.value);
    handleSearchTerm(event.target.value);
  };

  const resetFocus = () => {
    clearSearchField();
    inputRef.current.focus();
  };

  return (
    <div className={styles.input_container}>
      <Icon className={classNames([styles.icon, styles.search_icon])} name="search" size={16} color="#95A1AD" />
      <input
        id="search-input"
        type="text"
        name="text"
        autoFocus
        ref={inputRef}
        value={searchTerm}
        aria-label="Enter a search term"
        placeholder="What are you looking for?"
        className={styles.input}
        onChange={onChange}
      />
      <button onClick={resetFocus} className={styles.button} aria-label="Close search bar" disabled={disabled}>
        <Icon name="close" size={15} color={disabled ? '#B4BFCC' : '#78838F'} />
      </button>
    </div>
  );
};
