import * as React from 'react';
import { Icon } from 'src/shared/icon';
import { useMediaQuery } from '@/hooks/use-media-query';
import styles from './search-button.module.css';

type SearchButtonProps = {
  onClick: () => void;
};

export const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  const isMobile = useMediaQuery(600);

  return (
    <>
      {!isMobile ? (
        <button type="button" onClick={onClick} className={styles.desktop_button}>
          <Icon className={styles.search_icon} name="search" size={16} color="#95A1AD" />
          <span className={styles.text}>Search</span>
          <Icon className={styles.subtract_icon} name="subtract" size={15} color="#78838F" />
        </button>
      ) : (
        <button type="button" onClick={onClick} className={styles.mobile_button}>
          <Icon className={styles.search_icon} name="search" size={25} color="#25292E" />
        </button>
      )}
    </>
  );
};
