import { AppBar, Avatar, Container, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ShtrangyIcon from "./shtrangy.svg";
import React, { Component } from 'react';
import Home from './home';
import MyProfile from './myProfiled';
import { withRouter } from 'react-router-dom'
import styled from '@emotion/styled';
import Badge from '@mui/material/Badge';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            containerContent: Home
        }
        this.myProfile = this.myProfile.bind(this)
        this.notification = this.notification.bind(this)
    }

    myProfile() {
        this.setState({
            containerContent: Home
        })
        console.log(this.state.containerContent)
    }

    notification() {
        this.setState({
            containerContent: MyProfile
        })
    }

    render() {
        const StyledBadge = styled(Badge)(({ theme }) => ({
            '& .MuiBadge-badge': {
                backgroundColor: '#44b700',
                color: '#44b700',
                '&::after': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '100%',
                    animation: 'ripple 1.2s infinite ease-in-out',
                    border: '1px solid currentColor',
                    content: '""',
                },
            },
            '@keyframes ripple': {
                '0%': {
                    transform: 'scale(0.8)',
                    opacity: 1,
                },
                '100%': {
                    transform: 'scale(2.4)',
                    opacity: 0,
                },
            },
        }));
        return (
            <React.Fragment>
                <AppBar elevation={1}>
                    <Toolbar sx={{ backgroundColor: "white" }}>
                        <img style={{ marginRight: "8px" }} src={ShtrangyIcon} onMouseEnter={this.notification} onMouseLeave={this.myProfile} />
                        <Typography variant="h6" color="primary" >
                            Shtrangy
                        </Typography>
                        <Input
                            placeholder="Search"
                            sx={{ mx: "auto" }}
                            endAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                        <IconButton onClick={this.notification}><NotificationsIcon /></IconButton>
                        <IconButton onClick={this.myProfile}><AccountCircleIcon /></IconButton>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
                        </StyledBadge>
                    </Toolbar>
                </AppBar>
                <Container sx={{ color: "black", mt: "70px", pl: "0px" }} maxWidth={false} disableGutters={true}><this.state.containerContent /></Container>
                </React.Fragment>
        );
    }
}

export default withRouter(Header);

