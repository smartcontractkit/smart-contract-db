import React, { useEffect, useState } from 'react';
import { Sidebar } from 'src/sidebar';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '../shared/icon';
import styles from './hamburgerMenu.module.css';

const useStyles = makeStyles({
  drawer: {
    '& .MuiBackdrop-root': {
      opacity: '0.3 !important',
    },
  },
});

export const HamburgerMenu: React.FC = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showClose, setShowClose] = useState(false);

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
      <Drawer anchor="left" className={classes.drawer} onClose={() => setOpenDrawer(false)} open={openDrawer}>
        {showClose && (
          <div role="presentation" className={styles.closeContainer} onClick={() => setOpenDrawer(false)}>
            <p className={styles.close}>Close</p> <Icon className={styles.closeIconToggle} name="close" size={32} />
          </div>
        )}

        <div role="presentation" className={styles.hamburgerMenu}>
          <Sidebar open={openDrawer} />
        </div>
      </Drawer>
      <div className={openDrawer ? styles.opacityHamburger : styles.hamburgerContainer}>
        <div className={styles.browse}>Browse</div>
        <button
          type="button"
          className={styles.iconButtonContainer}
          aria-label="Mobile Menu"
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Icon className={styles.menuIconToggle} name="hamburger" size={48} />
        </button>
      </div>
    </>
  );

  // return (
  //   <>
  //     {/* change opacity to be 0.3 on openDrawer */}
  //     {/* <Drawer anchor="left" className={styles.drawer} onClose={() => setOpenDrawer(false)} open={openDrawer}> */}
  //     <div className={styles.drawer} role="presentation">
  //       {showClose && (
  //         <>
  //           <div className={styles.backdrop} />
  //           <div role="presentation" className={styles.closeContainer} onClick={() => setOpenDrawer(false)}>
  //             <p className={styles.close}>Close</p>
  //             <Icon className={styles.closeIconToggle} name="close" size={32} />
  //           </div>
  //           <div className={styles.sidebar}>
  //             <div role="presentation" onClick={() => setOpenDrawer(false)} className={styles.hamburgerMenu}>
  //               <Sidebar />
  //             </div>
  //           </div>
  //         </>
  //       )}
  //     </div>
  //     {/* </Drawer> */}
  //     <div className={openDrawer ? styles.opacityHamburger : styles.hamburgerContainer}>
  //       <div className={styles.browse}>Browse</div>
  //       <button
  //         type="button"
  //         aria-label="Mobile Menu"
  //         className={styles.iconButtonContainer}
  //         onClick={() => setOpenDrawer(!openDrawer)}
  //       >
  //         <span className={styles.menuLabel}>
  //           <Icon className={styles.menuIconToggle} name="hamburger" size={48} />
  //         </span>
  //       </button>
  //     </div>
  //   </>
  // );
};
