import * as React from 'react';

import Home from './pages/home/Home'
import HomeLoggedin from './pages/home/HomeLoggedin';

import Box from '@mui/material/Box';
import { ThemeProvider } from "@mui/material";
import { lightTheme , darkTheme } from "./themes/theme";
import { useState } from "react";


function App() {
  
  const [mode, setMode] = useState("light");

  return (
    <ThemeProvider theme={ mode === "light" ? lightTheme : darkTheme }>
      <Box sx={{ flexGrow: 1}}>
          <HomeLoggedin mode={mode} setMode={setMode} />
      </Box>
    </ThemeProvider>  
  )
}

export default App;
