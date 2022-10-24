import React from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import IconButton from '@mui/material/IconButton';

const ThemeMode = ({mode, setMode}) => {
    return (
        <IconButton
            onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
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