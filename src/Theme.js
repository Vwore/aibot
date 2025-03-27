import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', 'Open Sans', 'sans-serif'].join(','),
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.5rem', fontWeight: 600 },
    h3: { fontSize: '1.2rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 400 },
  },
  palette: {
    primary: {
      main: '#A594F9', // Soft purple
    },
    secondary: {
      main: '#D8C9FF', // Light pastel purple
    },
    text: {
      primary: '#333333', // Dark gray
      secondary: '#666666', // Medium gray
    },
    background: {
      default: '#EAE1FF', // Background color similar to the image
      paper: '#F6F0FF', // Slightly lighter for contrast
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          borderWidth: '1px',
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #D8C9FF',
          background: '#F6F0FF',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;
