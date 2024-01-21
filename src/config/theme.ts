import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7B52AB',
      light: '#E5CFFC',
      dark: '#553285',
      contrastText: '#F9FAFF'
    },
    secondary: {
      main: '#3A42FF',
      light: '#B1CSFF',
      dark: '#3040DC',
      contrastText: '#F9FAFF'
    },
    gradients: {
      horizontal: 'linear-gradient(90deg, #7B52AB, #3A42FF)',
      diagonal: 'linear-gradient(270deg, #3a42ff 0%, #7b52ab 100%)'
    },
    background: {
      default: '#F9FAFF'
    }
  },
  typography: {
    fontFamily: 'Open Sans'
  }
});

export default theme;
