import classNames from 'classnames';
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'src/link';
import { Icon } from 'src/shared/icon';
import { useKeyPress } from '@/hooks/use-key-press';
import { HotKeyBar } from './hotkey-bar';
import styles from './search-results.module.css';

type SearchResultsProps = {
  searchTerm: string;
  isMobile: boolean;
  results: any[];
  closeSearchBox: () => void;
};

const keyMapper = ({ id, type, tag }: { id: string; type: string; tag: string }) =>
  `${id}-${type.toLocaleLowerCase()}-${tag?.toLocaleLowerCase()}`;

export const ResultsListItem: React.FC<{ item; active; setSelected; setHovered; closeSearchBox }> = ({
  item,
  active,
  setSelected,
  setHovered,
  closeSearchBox,
}) => {
  const { title, link, type } = item;
  const itemRef = useRef(null);

  useEffect(() => {
    if (active) {
      // Move element into view when it is focused
      itemRef.current.focus();
    }
  }, [itemRef, active]);

  const handleSelect = useCallback(() => {
    // setting focus to that element when it is selected
    setSelected(item);
  }, [item, setSelected]);

  return (
    <li
      ref={itemRef}
      className={classNames([styles.results_list_item, active ? 'active' : ''])}
      onClick={() => setSelected(item)}
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered(undefined)}
      onKeyPress={handleSelect}
    >
      <Link className={styles.link} rel="noopener noreferrer" href={link} onClick={closeSearchBox}>
        <div>
          <Icon className={styles.results_list_item_arrow_icon} name="long-arrow-up" size={12} />
          <span className={classNames([styles.results_list_item_title, styles.truncate])}>{title}</span>
        </div>
        <span className={styles.results_list_item_type}>{type}</span>
      </Link>
    </li>
  );
};

export const ResultsList: React.FC<{ isMobile: boolean; results: any[]; closeSearchBox: () => void }> = ({
  isMobile,
  results,
  closeSearchBox,
}) => {
  const [selected, setSelected] = useState(undefined);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  // Set focus down press
  useEffect(() => {
    if (results.length && downPress) {
      setCursor((prevState) => (prevState < results.length - 1 ? prevState + 1 : prevState));
    }
  }, [downPress]);

  // Set focus on up press
  useEffect(() => {
    if (results.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  // Set selected list item on enter press
  useEffect(() => {
    if (results.length && enterPress) {
      setSelected(results[cursor]);
    }
  }, [cursor, enterPress]);

  // Set focus on cursor hover
  useEffect(() => {
    if (results.length && hovered) {
      setCursor(results.indexOf(hovered));
    }
  }, [hovered]);

  return (
    <div className={styles.results_container}>
      <h4 className={styles.results_header}>Results</h4>
      <ul className={styles.results_list}>
        {results.map((item, i) => (
          <ResultsListItem
            key={keyMapper(item)}
            active={i === cursor}
            item={item}
            setSelected={setSelected}
            setHovered={setHovered}
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

export const SearchResults: React.FC<SearchResultsProps> = ({ searchTerm, isMobile, results, closeSearchBox }) => (
  <>
    {results.length ? (
      <ResultsList isMobile={isMobile} results={results} closeSearchBox={closeSearchBox} />
    ) : (
      <NoResults searchTerm={searchTerm} />
    )}
  </>
);
