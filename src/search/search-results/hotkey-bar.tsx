import React from 'react';
import { Icon } from 'src/shared/icon';
import styles from './hotkey-bar.module.css';

export const HotKeyBar: React.FC = () => (
  <div className={styles.hotkey_bar}>
    <div className={styles.hotkey_bar_section}>
      <Icon className={styles.hotkey_bar_spacing} name="hotkey-arrow" size={15} direction="up" color="#78838F" />
      <Icon className={styles.hotkey_bar_spacing} name="hotkey-arrow" size={15} direction="down" color="#78838F" />
      <span>To navigate</span>
    </div>
    <div className={styles.hotkey_bar_section}>
      <Icon className={styles.hotkey_bar_spacing} name="hotkey-return" width={18} height={14} color="#78838F" />
      <span>To select</span>
    </div>
  </div>
);
