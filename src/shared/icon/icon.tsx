import React, { FC } from 'react';
import {
  LongArrowUp,
  BulletPoint,
  GitHub,
  Hamburger,
  Close,
  Chevron,
  Search,
  Dismiss,
  Subtract,
  HotKeyArrow,
  HotKeyReturn,
} from './icons';
import styles from './icon.module.css';

const iconNameMap = {
  'long-arrow-up': LongArrowUp,
  'bullet-point': BulletPoint,
  github: GitHub,
  hamburger: Hamburger,
  close: Close,
  chevron: Chevron,
  search: Search,
  subtract: Subtract,
  dismiss: Dismiss,
  'hotkey-arrow': HotKeyArrow,
  'hotkey-return': HotKeyReturn,
};

export enum IconDirectionVariant {
  UP = 'up',
  RIGHT = 'right',
  DOWN = 'down',
  LEFT = 'left',
  DEFAULT = '',
}

export const iconClassMap: { [key in IconDirectionVariant]: string } = {
  up: styles.up,
  right: styles.right,
  down: styles.down,
  left: styles.left,
  '': '',
};

export type IconProps = {
  className?: string;
  color?: string;
  /**
   * Width and height together. Used on most SVGs.
   * If width and height are different, don't use size.
   */
  size?: number;
  width?: number;
  height?: number;
  direction?: string;
  focusable?: boolean;
} & React.DOMAttributes<HTMLOrSVGElement>;

const IconPropDefaults = {
  className: '',
  color: 'black',
  size: 32,
  width: 32,
  height: 32,
  direction: 'default',
  focusable: false,
};

const Icon: FC<IconProps & { name: string }> = ({ name, ...rest }) => {
  const SVG = iconNameMap[name] as keyof JSX.IntrinsicElements;
  return <SVG {...rest} />;
};

export { IconPropDefaults, Icon };
