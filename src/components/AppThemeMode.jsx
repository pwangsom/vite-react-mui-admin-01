import React from 'react'
import {
    Fab,
    Tooltip,
  } from "@mui/material";
import ModeNightIcon from '@mui/icons-material/ModeNight';

const AppThemeMode = ({mode, setMode}) => {
    return (
        <Tooltip
            onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
            title="Theme Mode"
            sx={{
                position: "fixed",
                bottom: 20,
                left: { xs: "calc(50% - 25px)", md: 30 },
            }}
        >
            <Fab conlor="primary" aria-label="theme mode">
                <ModeNightIcon />
            </Fab>
        </Tooltip>
    )
}

export default AppThemeMode;