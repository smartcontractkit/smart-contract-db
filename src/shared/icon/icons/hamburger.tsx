import React from 'react';
import { IconPropDefaults, IconProps } from '../icon';

export const Hamburger: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
  focusable = IconPropDefaults.focusable,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    focusable={focusable}
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);
