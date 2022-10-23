import * as React from 'react';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'

import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
