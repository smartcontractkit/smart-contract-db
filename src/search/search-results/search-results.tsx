import classNames from 'classnames';
import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import Link from 'src/link';
import { Icon } from 'src/shared/icon';
import { HotKeyBar } from './hotkey-bar';
import styles from './search-results.module.css';
import { useFocusTrap } from '@/hooks/use-focus';
import { Resource } from '@/data/resources/models/resource.model';

type SearchResultsProps = {
  searchTerm: string;
  isMobile: boolean;
  results: any[];
  closeSearchBox: () => void;
};

type ResultsListItemProps = {
  index: number;
  item: Resource;
  focus: boolean;
  setFocus: (index: number) => void;
  closeSearchBox: () => void;
};

const keyMapper = ({ id, type, tag }: { id: string; type: string; tag: string }) =>
  `${id}-${type.toLocaleLowerCase()}-${tag?.toLocaleLowerCase()}`;

export const ResultsListItem: React.FC<ResultsListItemProps> = ({ index, item, focus, setFocus, closeSearchBox }) => {
  const { title, link, type } = item;
  const linkRef = useRef(null);

  useEffect(() => {
    if (focus) {
      linkRef.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    // setting focus to that element when it is selected
    setFocus(index);
  }, [index, setFocus]);

  const handleClick = () => {
    handleSelect();
    closeSearchBox();
  };

  return (
    <li className={styles.results_list_item}>
      <Link
        ref={linkRef}
        className={styles.link}
        rel="noopener noreferrer"
        href={link}
        onKeyPress={handleSelect}
        onClick={handleClick}
      >
        <div>
          <Icon className={styles.results_list_item_arrow_icon} name="long-arrow-up" size={12} />
          <span className={classNames([styles.results_list_item_title, styles.truncate])}>{title}</span>
        </div>
        <span className={styles.results_list_item_type}>{type}</span>
      </Link>
    </li>
  );
};

export const ResultsList: React.FC<{
  isMobile: boolean;
  results: any[];
  closeSearchBox: () => void;
}> = ({ isMobile, results, closeSearchBox }) => {
  const [focus, setFocus] = useFocusTrap(results.length);

  return (
    <div className={styles.results_container}>
      <h4 className={styles.results_header}>Results</h4>
      <ul className={styles.results_list}>
        {results.map((item, i) => (
          <ResultsListItem
            key={keyMapper(item)}
            index={i}
            item={item}
            focus={focus === i}
            setFocus={setFocus}
            closeSearchBox={closeSearchBox}
          />
        ))}
      </ul>
      {!isMobile ? <HotKeyBar /> : ''}
    </div>
  );
};

export const NoResults: React.FC<{ searchTerm: string }> = ({ searchTerm }) => (
  <div className={styles.no_results_container}>
    <div className={styles.no_results_emoji_container}>
      <span role="img" aria-label="Thinking emoji" className={styles.no_results_emoji}>
        🤔
      </span>
    </div>
    <h4 className={styles.no_results_header}>No results for &#39;{searchTerm}&#39;</h4>
    <div className={styles.no_results_body}>
      <p>We couldn&#39;t find anything matching your search.</p>
      <p>Try again with a different term</p>
    </div>
  </div>
);

export const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const { results, searchTerm } = props;
  return <>{results.length ? <ResultsList {...props} /> : <NoResults searchTerm={searchTerm} />}</>;
};
