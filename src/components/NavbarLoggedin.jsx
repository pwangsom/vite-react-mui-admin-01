import * as React from 'react';

import Logo from './Logo';
import ThemeMode from './ThemeMode';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Navbar({mode, setMode}) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Logo />

                    <Box sx={{ flexGrow: 1 }} />

                    <ThemeMode  mode={mode} setMode={setMode} />
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;
