import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../link';

const useStyles = makeStyles({
  nested: {
    paddingLeft: '1.5rem',
    fontSize: '0.875rem',
    paddingTop: '0rem',
    paddingBottom: '0rem',
  },
  container: {
    paddingRight: '6rem',
    paddingLeft: '1rem',
  },
  subNavHeading: {
    color: '#95A1AD',
  },
  hr: {
    backgroundColor: '#D3DDE5',
    width: '50%',
    margin: '0.5rem 0 1rem 1rem',
  },
  links: {
    color: '#1F2529',
  },
});

// have paths be /education/path?
const educationNav = [
  { title: 'Books', path: '/books' },
  { title: 'Tutorials', path: '/tutorials' },
  { title: 'Courses', path: '/courses' },
  { title: 'Workshops', path: '/workshops' },
  { title: 'Trainers', path: '/trainers' },
  { title: 'Schools', path: '/schools' },
];

// have paths be /tools/path?
const toolsNav = [
  { title: 'IDEs', path: '/ides' },
  { title: 'Frameworks', path: '/frameworks' },
  { title: 'Libraries', path: '/libraries' },
];

const nav = [
  { title: 'Communities', path: '/communities' },
  { title: 'Consultants', path: '/consultants' },
  { title: 'Events', path: '/events' },
  { title: 'Education', path: null, children: educationNav },
  { title: 'Tools', path: null, children: toolsNav },
  { title: 'Glossary', path: '/glossary' },
];

export const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.container}>
      {nav.map((navItem) => {
        if (navItem.path === null) {
          return (
            <React.Fragment key={navItem.title}>
              <ListItem>
                <ListItemText primary={navItem.title} className={classes.subNavHeading} />
              </ListItem>
              <List component="div" className={classes.nested}>
                {navItem.children.map((childItem) => {
                  return (
                    <ListItem key={childItem.title}>
                      <Link href={childItem.path} className={classes.links} underline="none">
                        <ListItemText disableTypography primary={childItem.title} />
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </React.Fragment>
          );
        }

        if (navItem.title === 'Glossary') {
          return (
            <React.Fragment key={navItem.title}>
              <hr className={classes.hr} />
              <ListItem>
                <Link href={navItem.path} className={classes.links} underline="none">
                  <ListItemText primary={navItem.title} />
                </Link>
              </ListItem>
            </React.Fragment>
          );
        }

        return (
          <ListItem key={navItem.title}>
            <Link href={navItem.path} className={classes.links} underline="none">
              <ListItemText primary={navItem.title} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
