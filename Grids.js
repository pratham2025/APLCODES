import React from 'react'
import { Grid, Paper } from '@mui/material';

const Grids = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: '20px', textAlign: 'center' }}>Item 1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: '20px', textAlign: 'center' }}>Item 2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: '20px', textAlign: 'center' }}>Item 3</Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default Grids