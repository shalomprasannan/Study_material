import { AppBar, Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, CssBaseline, Grid, IconButton, Input, InputAdornment, Paper, TextField, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import JobPost from './jobPost'
import Sidebar from './sidebar';
import ShtrangyIcon from "./shtrangy.svg";
import Header from './header';
import PostCreator from './postCreator';
import JobStatus from './jobStatus';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment >
                <CssBaseline />
                    <Grid container>
                        <Grid item xs sx={{position:"fixed", zIndex:"100", ml:"16px"}} style={{ minWidth: "calc(3/12 * 100vw)" }}>
                            <PostCreator/>
                        </Grid>
                    <Grid container item xs={6} sx={{ justifyContent: "center", ml:"auto", mr:"auto" }} gap={0}>
                        <Grid item xs>
                            <JobPost />
                            <JobPost />
                            <JobPost />
                            <JobPost />
                            <JobPost />
                            <JobPost />
                            <JobPost />
                            <JobPost />
                        </Grid>
                    </Grid>
                    <Grid item xs sx={{position:"fixed", zIndex:"100", right:"16px"}} style={{ minWidth: "calc(3/12 * 100vw)" }}>
                            <JobStatus sx={{overflow:"scroll"}}/>
                        </Grid>
                    </Grid>
            </React.Fragment >
        )
    }
}

export default Home;