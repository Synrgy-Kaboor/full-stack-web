import '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    gradients?: {
      horizontal: string;
      diagonal: string
    }
  }
  interface PaletteOptions {
    gradients?: {
      horizontal: string;
      diagonal: string
    }
  }
}