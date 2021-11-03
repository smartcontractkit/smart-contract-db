import React from 'react';
import styles from './sidebar.module.css';
import { Icon } from '../shared/icon';
import Link from '../link';
import { Accordion } from './accordion';

const educationNav = [
  { title: 'Books', path: '/books' },
  { title: 'Tutorials', path: '/tutorials' },
  { title: 'Courses', path: '/courses' },
  { title: 'Workshops', path: '/workshops' },
  { title: 'Trainers', path: '/trainers' },
  { title: 'Schools', path: '/schools' },
];

const toolsNav = [
  { title: 'Blockchains', path: '/blockchains' },
  { title: 'IDEs', path: '/ides' },
  { title: 'Frameworks', path: '/frameworks' },
  { title: 'Libraries', path: '/libraries' },
  { title: 'Exchanges', path: '/exchanges' },
  { title: 'Languages', path: '/languages' },
  { title: 'Validators', path: '/validators' },
  { title: 'Wallets', path: '/wallets' },
  { title: 'Test', path: '/test' },
  { title: 'Deploy', path: '/deploy' },
  { title: 'Monitoring', path: '/monitoring' },
  { title: 'Administration', path: '/administration' },
  { title: 'Security', path: '/security' },
];

const nav = [
  { title: 'Communities', path: '/communities' },
  { title: 'Consultants', path: '/consultants' },
  { title: 'Events', path: '/events' },
  { title: 'Education', path: null, children: educationNav },
  { title: 'Tools', path: null, children: toolsNav },
  { title: 'Glossary', path: '/glossary' },
];

export const Sidebar: React.FC<any> = ({ open }) => {
  return (
    <nav className={`${styles.container} ${open ? styles.open : ''}`}>
      <ul className={styles.list}>
        {nav.map((navItem) => {
          if (navItem.path === null) {
            return <Accordion key={navItem.title} title={navItem.title} content={navItem.children} />;
          }

          if (navItem.title === 'Glossary') {
            return (
              <React.Fragment key={navItem.title}>
                <li className={styles.hr} />
                <li className={styles.root}>
                  <Link href={navItem.path} className={styles.links} activeClassName={styles.activeLinks}>
                    <Icon className={styles.bulletPoint} name="bullet-point" />
                    <span className={styles.listTitles}>{navItem.title}</span>
                  </Link>
                </li>
                {/* hide depending on screen size */}
                <li className={styles.contributeContainer}>
                  <a
                    href="https://github.com/smartcontractkit/smart-contract-db"
                    rel="noopener noreferrer"
                    className={styles.contributeLinks}
                  >
                    <span className={styles.contribute}>Contribute at </span>
                    <span className={styles.contributeLogo}>
                      <Icon className={styles.github} name="github" size={27.42} /> <b>GitHub</b>
                    </span>
                  </a>
                </li>
              </React.Fragment>
            );
          }

          return (
            <li key={navItem.title} className={styles.root}>
              <Link href={navItem.path} className={styles.links} activeClassName={styles.activeLinks}>
                <Icon className={styles.bulletPoint} name="bullet-point" />
                <span className={styles.listTitles}>{navItem.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
