import React from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import IconButton from '@mui/material/IconButton';

const ThemeMode = () => {
    return (
        <IconButton
            size="small"
            edge="end"
            color="inherit"
            aria-label="theme mode"
            sx={{ mr: 0.3 }}
        >
            <ModeNightIcon fontSize="inherit" />
        </IconButton>
    )
}

export default ThemeMode;