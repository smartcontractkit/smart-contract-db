import React from 'react';
import { IconPropDefaults, IconProps } from '../icon';

export const Chevron: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  focusable = IconPropDefaults.focusable,
}: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    focusable={focusable}
  >
    <rect width="24" height="24" rx="12" />
    <path
      d="M17.6567 14.3569L12.0001 8.7002L6.34341 14.3569L7.28607 15.3002L12.0001 10.5855L16.7141 15.3002L17.6567 14.3569Z"
      fill="#4D545C"
    />
  </svg>
);
