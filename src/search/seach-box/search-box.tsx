/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef, useState } from 'react';
import { Icon } from 'src/shared/icon';
import classNames from 'classnames';
import styles from './search-box.module.css';
import { useOutsideClick } from '@/hooks/use-outside-click';

type SearchBoxProps = {
  searchTerm: string;
  isMobile: boolean;
  handleSearchTerm: (searchTerm: string) => void;
  clearSearchField: () => void;
  onClose: () => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({
  searchTerm,
  isMobile,
  handleSearchTerm,
  clearSearchField,
  onClose,
}) => {
  const inputRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const onChange = (event) => {
    setDisabled(!event.target.value);
    handleSearchTerm(event.target.value);
  };

  const resetFocus = () => {
    clearSearchField();
    setDisabled(true);

    if (!isMobile) {
      inputRef.current.focus();
    }
  };

  useOutsideClick(inputRef, () => {
    // exit modal if there's no search
    if (isMobile && !searchTerm) {
      onClose();
    }
  });

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
      <button
        type="button"
        onClick={resetFocus}
        className={styles.close_button}
        aria-label="Close search bar"
        disabled={disabled}
      >
        <Icon name="close" size={15} color={disabled ? '#B4BFCC' : '#78838F'} />
      </button>
    </div>
  );
};
