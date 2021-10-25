import * as React from 'react';
import { Icon } from 'src/shared/icon';
import styles from './search-button.module.css';

type SearchButtonProps = {
  onClick: () => void;
};

export const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className={styles.button}>
    <Icon className={styles.searchIcon} name="search" size={16} color="#95A1AD" />
    <span className={styles.text}>Search</span>
    <Icon className={styles.subtractIcon} name="subtract" size={15} color="#78838F" />
  </button>
);
