import React from 'react'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import IconButton from '@mui/material/IconButton';

const LogoSmall = () => {
    return (
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
    )
}

export default LogoSmall;