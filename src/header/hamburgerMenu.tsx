import React, { useEffect, useState } from 'react';
import { Drawer, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { Sidebar } from 'src/sidebar';
import styles from './hamburgerMenu.module.css';

export const HamburgerMenu: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const theme = useTheme();
  const xsMatch = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('hamburger-menu', {
        bubbles: true,
        detail: openDrawer,
      })
    );
    if (openDrawer) {
      setTimeout(() => {
        setShowClose(openDrawer);
      }, 250);
    } else {
      setShowClose(openDrawer);
    }
  }, [openDrawer]);

  return (
    <>
      {/* change opacity to be 0.3 on openDrawer */}
      {/* <Drawer anchor="left" className={styles.drawer} onClose={() => setOpenDrawer(false)} open={openDrawer}> */}
      <div className={styles.drawer} role="presentation">
        {showClose && (
          <>
            <div className={styles.backdrop} />
            <div role="presentation" className={styles.closeContainer} onClick={() => setOpenDrawer(false)}>
              <p className={styles.close}>Close</p> <ClearIcon className={styles.closeIconToggle} />
            </div>
            <div className={styles.sidebar}>
              <div
                role="presentation"
                onClick={() => setOpenDrawer(false)}
                className={xsMatch ? styles.xsHamburgerMenu : styles.hamburgerMenu}
              >
                <Sidebar />
              </div>
            </div>
          </>
        )}
      </div>
      {/* </Drawer> */}
      <div className={openDrawer ? styles.opacityHamburger : styles.hamburgerContainer}>
        <div className={styles.browse}>Browse</div>
        <button type="button" className={styles.iconButtonContainer} onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon className={styles.menuIconToggle} />
        </button>
      </div>
    </>
  );
};
