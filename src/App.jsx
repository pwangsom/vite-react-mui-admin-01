import * as React from 'react';

import Home from './pages/home/Home'

import Box from '@mui/material/Box';
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box sx={{ flexGrow: 1 }}>
          <Home />
      </Box>
    </ThemeProvider>
  )
}

export default App;
