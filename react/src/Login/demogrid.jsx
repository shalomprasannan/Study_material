import { Grid, Paper } from '@mui/material';
import React, { Component } from 'react';
import './demogrid.css';





class DemoGrid extends Component {

    render(){
        return (
            <Grid container height="300px">
                <Grid item xs={3} container component="Paper" direction="column" spacing={1}>
                    <Grid item xs>
                        <Paper sx={{height:"100%"}}>Item 11</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>Item 12</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>Item 13</Paper>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Paper>Item 2</Paper>
                </Grid>
                <Grid item xs>
                    <Paper>Item 3</Paper>
                </Grid>
            </Grid>
        );
    };
}

export default DemoGrid;