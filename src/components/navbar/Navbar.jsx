import * as React from 'react';

import Logo from '../../asset/img/extreme-iii-logo-white.png'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AgricultureIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 300,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        EXTREME-III
                    </Typography>

                    <AgricultureIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 300,
                            color: 'inherit',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                        }}
                    >
                        EXTREME-III
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                    </Box>
                    
                    <Box sx={{ flexGrow: 0 }}>
                        <Button color="inherit">Login</Button>
                    </Box>
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
