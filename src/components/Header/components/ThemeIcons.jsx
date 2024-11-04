import { IconButton } from '@mui/material'
import React from 'react'
import { MdLightMode, MdNightlightRound } from 'react-icons/md'

export function LightThemeButton({changeTheme}) {
    return (
        <IconButton onClick={changeTheme}>
            <MdLightMode color='#FDFDFD'/>
        </IconButton>
    )
}

export function DarkThemeButton({changeTheme}) {
    return (
        <IconButton onClick={changeTheme}>
            <MdNightlightRound color='#232323'  />
        </IconButton>
    )
}

