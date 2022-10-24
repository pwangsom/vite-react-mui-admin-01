import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#429e49',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
})

export { lightTheme , darkTheme }