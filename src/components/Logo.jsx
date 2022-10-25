import React from 'react'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const iconStyle = {
    fontSize: '35px'
};

const Logo = () => {
    return (
        <>
            <Button
                color="inherit"
                aria-label="logo name"
                size="large"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontSize: '18px',
                    letterSpacing: '.1rem',
                    color: 'inherit',
                }}        
                startIcon={<AgricultureIcon style={iconStyle} />}
            >
                EXTREME-III
            </Button>          

            <IconButton
                color="inherit"
                aria-label="logo name"
                size="large"
                href="/"
                sx={{
                    flexGrow: 0,
                    display: { xs: 'flex', md: 'none' }
                }}
            >
                <AgricultureIcon
                    fontSize="large"
                />
            </IconButton>            
        </>
      
    )
}

export default Logo;