import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Drawer, IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Sidebar } from 'src/sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '../link';

const useStyles = makeStyles({
  grid: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    alignItems: 'center',
    flexWrap: 'nowrap',
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
    paddingLeft: '3.5rem',
  },
  hamburgerContainer: {
    display: 'inline-flex',
    alignItems: 'center',
  },
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
      <Grid container className={classes.grid}>
        <Grid item xs={1}>
          <Link href="/" onClick={() => setResourceTitle('')}>
            <img src="/img/logo.svg" alt="smartcontract DB logo" />
          </Link>
        </Grid>
        {/* hide depending on screen size */}
        <Grid item xs={2} className={classes.categoryTitle}>
          {!isMatch ? <b>{resourceTitle}</b> : null}
        </Grid>
        {/* hide depending on screen size and show hamburger */}
        <Grid item xs={9} className={classes.contributeContainer}>
          {isMatch ? (
            <Container>
              <Drawer anchor="left" onClose={() => setOpenDrawer(false)} open={openDrawer}>
                <div role="presentation" onClick={() => setOpenDrawer(false)}>
                  <Sidebar />
                </div>
              </Drawer>
              <div className={classes.hamburgerContainer}>
                <Typography>Browse</Typography>
                <IconButton
                  className={classes.iconButtonContainer}
                  onClick={() => setOpenDrawer(!openDrawer)}
                  disableRipple
                >
                  <MenuIcon className={classes.menuIconToggle} />
                </IconButton>
              </div>
            </Container>
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
