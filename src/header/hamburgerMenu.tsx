import React, { useState } from 'react';
import { Drawer, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Sidebar } from 'src/sidebar';

const useStyles = makeStyles({
  hamburgerMenu: {
    paddingTop: '3.625rem',
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
});

export const HamburgerMenu: React.FC = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer anchor="left" onClose={() => setOpenDrawer(false)} open={openDrawer}>
        <div role="presentation" onClick={() => setOpenDrawer(false)} className={classes.hamburgerMenu}>
          <Sidebar />
        </div>
      </Drawer>
      <div className={classes.hamburgerContainer}>
        <Typography>Browse</Typography>
        <IconButton className={classes.iconButtonContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
          <MenuIcon className={classes.menuIconToggle} />
        </IconButton>
      </div>
    </>
  );
};
