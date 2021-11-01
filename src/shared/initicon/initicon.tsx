import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getBackgroundColor, getFontSize, getInitials, getSize } from './utils';

export type IniticonProps = {
  text?: string;
  size?: number;
  saturation?: string;
  brightness?: string;
  color?: boolean;
  single?: boolean;
  seed?: number;
  borderRadius?: string;
};

export const IniticonDefaultProps = {
  text: '',
  size: 75,
  saturation: '80%',
  brightness: '40%',
  color: false,
  single: false,
  seed: 0,
  borderRadius: 'unset',
};

const useStyles = makeStyles({
  style: (props: IniticonProps) => ({
    backgroundColor: getBackgroundColor(props),
    height: getSize(props),
    width: getSize(props),
    fontSize: `${getFontSize(props)}px`,
    lineHeight: getSize(props),
    borderRadius: props.borderRadius,
    display: 'inline-block',
    textAlign: 'center',
    color: '#ffffff',
  }),
});

export const Initicon: React.FC<IniticonProps> = (props: IniticonProps = IniticonDefaultProps) => {
  const classes = useStyles({ ...IniticonDefaultProps, ...props });
  return <div className={classes.style}>{getInitials(props)}</div>;
};
