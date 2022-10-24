import React from 'react'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import IconButton from '@mui/material/IconButton';

const Logo = () => {
    return (
            <IconButton
                variant="text"
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
            >

                <AgricultureIcon
                    fontSize="medium"
                    sx={{
                        mr: 1
                    }}

                />

                EXTREME-III
            </IconButton>
    )
}

export default Logo;