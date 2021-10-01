import React, { useEffect, useState } from 'react';
import { Drawer, IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { Sidebar } from 'src/sidebar';

const useStyles = makeStyles({
  hamburgerMenu: {
    paddingTop: '3.625rem',
  },
  xsHamburgerMenu: {
    width: '50vw',
  },
  hamburgerContainer: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  opacityHamburger: {
    opacity: '0.3',
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
  closeIconToggle: {
    fontSize: '2rem',
    color: 'black',
  },
  closeContainer: {
    right: 0,
    display: 'flex',
    position: 'fixed',
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    paddingTop: '2.25rem',
    paddingRight: '2rem',
  },
  close: {
    paddingRight: '2rem',
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
        <div role="presentation" className={classes.closeContainer} onClick={() => setOpenDrawer(false)}>
          <p className={classes.close}>Close</p> <ClearIcon className={classes.closeIconToggle} />
        </div>
        <div
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          className={xsMatch ? classes.xsHamburgerMenu : classes.hamburgerMenu}
        >
          <Sidebar />
        </div>
      </Drawer>
      <div className={openDrawer ? classes.opacityHamburger : classes.hamburgerContainer}>
        <Typography>Browse</Typography>
        <IconButton className={classes.iconButtonContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
          <MenuIcon className={classes.menuIconToggle} />
        </IconButton>
      </div>
    </>
  );
};
