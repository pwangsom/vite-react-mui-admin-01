import * as React from 'react';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Navbar />
    </ThemeProvider>
  )
}

export default App;
