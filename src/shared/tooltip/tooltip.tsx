import React from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/styles';

const useStylesBootstrap = makeStyles(() => ({
  arrow: {
    color: 'black',
  },
  tooltip: {
    'background-color': 'black',
  },
}));

export const BootstrapTooltip: React.FC<TooltipProps> = (props) => {
  const classes = useStylesBootstrap();
  return <Tooltip arrow classes={classes} {...props} />;
};
