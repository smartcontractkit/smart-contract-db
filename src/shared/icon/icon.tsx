import React, { FC } from 'react';
import { LongArrowUp } from './icons';

const iconNameMap = {
  'long-arrow-up': LongArrowUp,
};

export type IconProps = {
  className?: string;
  color?: string;
  size?: number;
} & React.DOMAttributes<HTMLOrSVGElement>;

const IconPropDefaults = {
  className: '',
  color: 'black',
  size: 32,
};

const Icon: FC<IconProps & { name: string }> = ({ name, ...rest }) => {
  const SVG = iconNameMap[name] as keyof JSX.IntrinsicElements;
  return <SVG {...rest} />;
};

export { IconPropDefaults, Icon };
