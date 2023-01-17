import { Card, Grid, Link, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Callbacks } from 'jquery';
import React from 'react';
import JobPostNano from './jobPostNano';

class JobStatus extends React.Component {
    render() {
        return (
            <Grid item xs>
                            <JobPostNano />
                            <JobPostNano />
                            <JobPostNano />
                            <JobPostNano />
                            <JobPostNano />
                            <JobPostNano />
                            <JobPostNano />
                            <JobPostNano />
                        </Grid>
        );
    }
}

export default JobStatus;