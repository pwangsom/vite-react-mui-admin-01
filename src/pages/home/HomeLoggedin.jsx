import NavbarLoggedin from "../../components/NavbarLoggedin"

import React from 'react'
import Box from '@mui/material/Box';

const HomeLoggedin = ({mode, setMode}) => {
  return (
    <Box>
        <NavbarLoggedin mode={mode} setMode={setMode} />
    </Box>
  )
}

export default HomeLoggedin;