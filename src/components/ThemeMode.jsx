import React from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
            { mode === "dark" ?
                <Brightness7Icon fontSize='inherit' /> :
                <Brightness4Icon fontSize='inherit' /> 
            }
        </IconButton>
    )
}

export default ThemeMode;