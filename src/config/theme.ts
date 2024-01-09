import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    kaboor: Palette['primary'];
  }

  interface PaletteOptions {
    kaboor?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    kaboor: {
      main: '#7B52AB',
      dark: '#3A42FF',
      light: '#F9FAFF',
    },
  },
  typography: {
    body1: {
      fontFamily: 'OpenSans',
    },
  },
});

export default theme;
