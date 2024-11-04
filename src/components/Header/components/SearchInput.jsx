import { InputAdornment, Paper, TextField } from '@mui/material'
import React from 'react'
import { IoMdSearch } from 'react-icons/io'

function SearchInput() {
    return (
        <Paper sx={{ backgroundColor: "#FDFDFD", boxShadow: 'none' }}>
            <TextField variant='standard' size='small' slotProps={
                {
                    input: {
                        startAdornment: (<InputAdornment position='start'> <IoMdSearch /> </InputAdornment>)
                    }
                }
            } />
        </Paper>
    )
}

export default SearchInput