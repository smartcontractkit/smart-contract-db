import React from 'react';
import { IconPropDefaults, IconProps } from '../icon';

export const LongArrowUp: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  size = IconPropDefaults.size,
  focusable = IconPropDefaults.focusable,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    focusable={focusable}
  >
    <path
      d="M10.1488 3.04165L10.1547 5.99998H11.833L11.833 0.166645H5.99967L5.99967 1.84498L8.95801 1.85081L0.16634 10.6425L1.35717 11.8333L10.1488 3.04165Z"
      fill="#1F2529"
    />
  </svg>
);
