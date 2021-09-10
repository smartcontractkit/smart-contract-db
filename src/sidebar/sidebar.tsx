import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

// TODO: for Routing - nav items ticket #11
// look into how to use with import { useRouter } from 'next/router';
// use the adapter versions?
// I.E. NextLinkComposed and Link

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
});

// TODO: refactor this layout with Routing - nav items ticket #11
export const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.container}>
      <ListItem>
        <ListItemText primary="Communities" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Consultants" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Events" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Education" className={classes.subNavHeading} />
      </ListItem>
      <List component="div" className={classes.nested}>
        <ListItem>
          <ListItemText disableTypography primary="Books" />
        </ListItem>
        <ListItem>
          <ListItemText disableTypography primary="Tutorials" />
        </ListItem>
        <ListItem>
          <ListItemText disableTypography primary="Courses" />
        </ListItem>
        <ListItem>
          <ListItemText disableTypography primary="Workshops" />
        </ListItem>
        <ListItem>
          <ListItemText disableTypography primary="Trainers" />
        </ListItem>
        <ListItem>
          <ListItemText disableTypography primary="Schools" />
        </ListItem>
      </List>
      <ListItem>
        <ListItemText primary="Tools" className={classes.subNavHeading} />
      </ListItem>
      <List component="div" className={classes.nested}>
        <ListItem>
          <ListItemText disableTypography primary="IDEs" />
        </ListItem>
        <ListItem>
          <ListItemText disableTypography primary="Frameworks" />
        </ListItem>
        <ListItem>
          <ListItemText disableTypography primary="Libraries" />
        </ListItem>
      </List>
      <hr className={classes.hr} />
      <ListItem>
        <ListItemText primary="Glossary" />
      </ListItem>
    </List>
  );
};
