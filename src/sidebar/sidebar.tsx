import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Icon } from '../shared/icon';
import Link from '../link';

const useStyles = makeStyles({
  root: {
    paddingLeft: 0,
  },
  smallRoot: {
    paddingLeft: '1.5rem',
    paddingRight: '7.5rem',
  },
  nested: {
    paddingLeft: '0.5rem',
    fontSize: '0.875rem',
    paddingTop: '0rem',
    paddingBottom: '0rem',
  },
  smallNested: {
    paddingLeft: '2rem',
    fontSize: '0.875rem',
    paddingTop: '0rem',
    paddingBottom: '0rem',
  },
  container: {
    paddingRight: '1.5rem',
    position: 'sticky',
    top: '123px',
  },
  smallContainer: {
    paddingRight: 0,
  },
  subNavHeading: {
    color: '#95A1AD',
    paddingLeft: '2rem',
  },
  hr: {
    backgroundColor: '#D3DDE5',
    width: '140px',
    margin: '0.5rem 0 0.625rem',
  },
  smHr: {
    backgroundColor: '#D3DDE5',
    width: '200px',
    margin: '0.5rem 0 0.625rem 1.5rem',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    color: '#1F2529',
    '& .bullet-point': {
      opacity: '0',
      // transition: 'transform 0.2s ease-out',
    },
    '&:hover .bullet-point': {
      opacity: '1',
      // transition: 'transform 0.2s ease-in',
    },
    '&:focus ': {
      color: '#0AA6E5',
    },
    '&:focus .bullet-point': {
      opacity: '1',
      fill: '#0AA6E5',
    },
  },
  smLinks: {
    display: 'flex',
    alignItems: 'center',
    color: '#1F2529',
    '&:hover': {
      color: '#0AA6E5',
    },
    '& .bullet-point': {
      opacity: '0',
      // transition: 'transform 0.2s ease-out',
    },
    '&:focus ': {
      color: '#0AA6E5',
    },
  },
  contributeContainer: {
    backgroundColor: '#F7F9FA',
  },
  contribute: {
    color: '#95a1ad',
  },
  contributeLogo: {
    color: '#25292e',
    '&:hover': {
      color: '#0AA6E5',
    },
  },
  contributeLinks: { textDecoration: 'none' },
});

const educationNav = [
  { title: 'Books', path: '/books' },
  { title: 'Tutorials', path: '/tutorials' },
  { title: 'Courses', path: '/courses' },
  { title: 'Workshops', path: '/workshops' },
  { title: 'Trainers', path: '/trainers' },
  { title: 'Schools', path: '/schools' },
];

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
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <List component="nav" className={isMatch ? classes.smallContainer : classes.container}>
        {nav.map((navItem) => {
          if (navItem.path === null) {
            return (
              <React.Fragment key={navItem.title}>
                <ListItem className={isMatch ? classes.smallRoot : classes.root}>
                  <ListItemText primary={navItem.title} className={classes.subNavHeading} />
                </ListItem>
                <List component="div" className={isMatch ? classes.smallNested : classes.nested}>
                  {navItem.children.map((childItem) => {
                    return (
                      <ListItem key={childItem.title}>
                        <Link
                          href={childItem.path}
                          className={isMatch ? classes.smLinks : classes.links}
                          underline="none"
                        >
                          <Icon className="bullet-point" name="bullet-point" />
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
                <hr className={isMatch ? classes.smHr : classes.hr} />
                <ListItem className={isMatch ? classes.smallRoot : classes.root}>
                  <Link href={navItem.path} className={isMatch ? classes.smLinks : classes.links} underline="none">
                    <Icon className="bullet-point" name="bullet-point" />
                    <ListItemText primary={navItem.title} />
                  </Link>
                </ListItem>
                {/* hide depending on screen size */}
                {isMatch ? (
                  <ListItem className={classes.contributeContainer}>
                    <a
                      href="https://github.com/thisdot/smart-contract-db"
                      rel="noopener noreferrer"
                      className={classes.contributeLinks}
                    >
                      <span className={classes.contribute}>Contribute at </span>
                      <span className={classes.contributeLogo}>
                        <GitHubIcon /> <b>GitHub</b>
                      </span>
                    </a>
                  </ListItem>
                ) : null}
              </React.Fragment>
            );
          }

          return (
            <ListItem key={navItem.title} className={isMatch ? classes.smallRoot : classes.root}>
              <Link href={navItem.path} className={isMatch ? classes.smLinks : classes.links} underline="none">
                <Icon className="bullet-point" name="bullet-point" />
                <ListItemText primary={navItem.title} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
