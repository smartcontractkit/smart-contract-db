import { createTheme } from '@material-ui/core/styles';

// TODO: palette is the base from the example, rework/remove
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Circular Std',
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
