import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Sidebar } from 'src/sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '../link';

const useStyles = makeStyles({
  grid: {
    alignItems: 'center',
  },
  contributeContainer: {
    textAlign: 'right',
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
  links: { textDecoration: 'none' },
  categoryTitle: {
    fontSize: '1.5rem',
  },
  drawerContainer: {},
  iconButtonContainer: {
    marginRight: 'auto',
    color: 'white',
  },

  menuIconToggle: {
    fontSize: '3rem',
    color: 'black',
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();
  const [resourceTitle, setResourceTitle] = useState('');
  const [openDrawer, setOpenDrawer] = useState(false);

  const updatedCategoryTitle = (e) => {
    setResourceTitle(e.detail.text);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    window.addEventListener('category-page-updated', (e) => updatedCategoryTitle(e));
    return () => {
      window.removeEventListener('category-page-updated', updatedCategoryTitle);
    };
  }, [resourceTitle]);

  return (
    <header>
      <Grid container spacing={10} className={classes.grid}>
        <Grid item xs={2}>
          <Link href="/" onClick={() => setResourceTitle('')}>
            <img src="/img/logo.svg" alt="smartcontract DB logo" />
          </Link>
        </Grid>
        <Grid item xs={2} className={classes.categoryTitle}>
          <b>{resourceTitle}</b>
        </Grid>
        {/* hide depending on screen size and show hamburger */}
        <Grid item xs={8} className={classes.contributeContainer}>
          {isMatch ? (
            <>
              <Drawer
                anchor="left"
                classes={{ paper: classes.drawerContainer }}
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
              >
                <Sidebar />
              </Drawer>
              <Typography>Browse</Typography>
              <IconButton
                className={classes.iconButtonContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
              >
                <MenuIcon className={classes.menuIconToggle} />
              </IconButton>
            </>
          ) : (
            <a href="https://github.com/thisdot/smart-contract-db" rel="noopener noreferrer" className={classes.links}>
              <span className={classes.contribute}>Contribute at </span>
              <span className={classes.contributeLogo}>
                <GitHubIcon /> <b>GitHub</b>
              </span>
            </a>
          )}
        </Grid>
      </Grid>
    </header>
  );
};
