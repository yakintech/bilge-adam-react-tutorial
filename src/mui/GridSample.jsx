import { Grid } from '@mui/material'
import React from 'react'

function GridSample() {
    return (<>
        <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
                <div style={{ height: 300, borderStyle: 'solid' }}>
                    Box-1
                </div>
            </Grid>
            <Grid item xs={6} sm={3}>
                <div style={{ height: 300, borderStyle: 'solid' }}>
                    Box-2
                </div>
            </Grid>
            <Grid item xs={6} sm={3}>
                <div style={{ height: 300, borderStyle: 'solid' }}>
                    Box-3
                </div>
            </Grid>
            <Grid item xs={6} sm={3}>
                <div style={{ height: 300, borderStyle: 'solid' }}>
                    Box-4
                </div>
            </Grid>

        </Grid>
    </>
    )
}

export default GridSample