import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// TODO: palette is the base from the example, rework/remove
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },

  typography: {
    fontFamily: 'Circular Std',
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 900,
      lg: 1025,
      xl: 1536,
    },
  },
});

export default theme;
