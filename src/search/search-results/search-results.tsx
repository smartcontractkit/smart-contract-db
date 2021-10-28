import * as React from 'react';
import Link from 'src/link';
import { Icon } from 'src/shared/icon';
import { HotKeyBar } from './hotkey-bar';
import styles from './search-results.module.css';

type SearchResultsProps = {
  searchTerm: string;
  results: any[];
  closeSearchBox: () => void;
};

export const SearchResults: React.FC<SearchResultsProps> = ({ searchTerm, results, closeSearchBox }) => (
  <>
    {results.length ? (
      <ResultsList results={results} closeSearchBox={closeSearchBox} />
    ) : (
      <NoResults searchTerm={searchTerm} />
    )}
  </>
);

export const ResultsList: React.FC<{ results: any[]; closeSearchBox: () => void }> = ({ results, closeSearchBox }) => (
  <div className={styles.results_container}>
    <h4 className={styles.results_header}>Results</h4>
    <ul className={styles.results_list}>
      {results.map(({ title, link, type }) => (
        <li className={styles.results_list_item} key={`${title}-${type}`}>
          <Link className={styles.link} rel="noopener noreferrer" href={link} onClick={closeSearchBox}>
            <div>
              <Icon className={styles.results_list_item_arrow_icon} name="long-arrow-up" size={12} />
              <span className={styles.results_list_item_title}>{title}</span>
            </div>
            <span className={styles.results_list_item_type}>{type}</span>
          </Link>
        </li>
      ))}
    </ul>
    <HotKeyBar />
  </div>
);

export const NoResults: React.FC<{ searchTerm: string }> = ({ searchTerm }) => (
  <div className={styles.no_results_container}>
    <div className={styles.no_results_emoji_container}>
      <i className={styles.no_results_emoji}>🤔</i>
    </div>
    <h4 className={styles.no_results_header}>No results for '{searchTerm}'</h4>
    <div className={styles.no_results_body}>
      <p>We couldn't find anything matching your search.</p>
      <p>Try again with a different term</p>
    </div>
  </div>
);
