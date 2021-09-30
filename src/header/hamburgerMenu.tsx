import React, { useEffect, useState } from 'react';
import { Drawer, IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Sidebar } from 'src/sidebar';

const useStyles = makeStyles({
  hamburgerMenu: {
    paddingTop: '3.625rem',
  },
  xsHamburgerMenu: {
    paddingTop: '0',
  },
  hamburgerContainer: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  iconButtonContainer: {
    marginRight: 'auto',
    color: 'white',
    paddingRight: '0',
  },
  menuIconToggle: {
    fontSize: '3rem',
    color: 'black',
  },
  // 768, 1024
  close: {
    position: 'fixed',
    right: 0,
    paddingRight: '6rem',
    paddingTop: '3rem',
    fontWeight: 'bold',
  },
  // 425
  smClose: {
    position: 'fixed',
    right: 0,
    paddingRight: '4.5rem',
    paddingTop: '3rem',
    fontWeight: 'bold',
  },
  // 375
  xsClose: {
    textAlign: 'center',
    paddingTop: '3rem',
    paddingBottom: '0',
    fontWeight: 'bold',
  },
  drawer: {
    '& .MuiBackdrop-root': {
      opacity: '0.3 !important',
    },
  },
});

export const HamburgerMenu: React.FC = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const xsMatch = useMediaQuery(theme.breakpoints.down('xs'));
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('hamburger-menu', {
        bubbles: true,
        detail: openDrawer,
      })
    );
  }, [openDrawer]);

  return (
    <>
      {/* change opacity to be 0.3 on openDrawer */}
      <Drawer anchor="left" className={classes.drawer} onClose={() => setOpenDrawer(false)} open={openDrawer}>
        <Typography
          // eslint-disable-next-line no-nested-ternary
          className={xsMatch ? classes.xsClose : smMatch ? classes.smClose : classes.close}
          onClick={() => setOpenDrawer(false)}
        >
          Close X
        </Typography>
        <div
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          className={xsMatch ? classes.xsHamburgerMenu : classes.hamburgerMenu}
        >
          <Sidebar />
        </div>
      </Drawer>
      <div className={classes.hamburgerContainer}>
        {!openDrawer && <Typography>Browse</Typography>}
        <IconButton className={classes.iconButtonContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
          <MenuIcon className={classes.menuIconToggle} />
        </IconButton>
      </div>
    </>
  );
};
