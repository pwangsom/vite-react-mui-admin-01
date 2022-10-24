import Navbar from "../../components/Navbar"

import React from 'react'
import Box from '@mui/material/Box';

const Home = ({mode, setMode}) => {
  return (
    <Box>
        <Navbar setMode={setMode} mode={mode} />
    </Box>
  )
}

export default Home;