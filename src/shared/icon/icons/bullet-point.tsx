import React from 'react';
import { IconPropDefaults, IconProps } from '../icon';

export const BulletPoint: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
  focusable = IconPropDefaults.focusable,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    focusable={focusable}
  >
    <circle cx="5.5" cy="5.5" r="2" />
  </svg>
);
