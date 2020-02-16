import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Typography, Toolbar } from '@material-ui/core'

export default function Navbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">Image Finder</Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}
