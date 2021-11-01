import React from 'react';
import { IconProps, IconPropDefaults } from '../icon';

export const Subtract: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
  focusable = IconPropDefaults.focusable,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    focusable={focusable}
  >
    <path d="M15.4995 1.75V14.25C15.4992 14.5814 15.3674 14.8992 15.133 15.1335C14.8987 15.3679 14.5809 15.4997 14.2495 15.5H1.74951C1.41809 15.4997 1.10034 15.3679 0.865994 15.1335C0.631645 14.8992 0.499843 14.5814 0.499512 14.25V1.75C0.499843 1.41858 0.631645 1.10083 0.865994 0.866482C1.10034 0.632133 1.41809 0.500331 1.74951 0.5H14.2495C14.5809 0.500331 14.8987 0.632133 15.133 0.866482C15.3674 1.10083 15.4992 1.41858 15.4995 1.75ZM11.1 3.14093C11.3105 2.70575 10.9935 2.2002 10.5101 2.2002C10.2588 2.2002 10.0296 2.34391 9.92014 2.57014L5.06622 12.6035C4.85569 13.0386 5.17272 13.5442 5.65615 13.5442C5.90746 13.5442 6.13664 13.4005 6.24609 13.1743L11.1 3.14093Z" />
  </svg>
);
