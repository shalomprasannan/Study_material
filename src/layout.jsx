import { AppBar, Avatar, Container, Grid, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ShtrangyIcon from "./shtrangy.svg";
import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { Box } from '@mui/system';

class Layout extends React.Component {

    render() {
        const StyledBadge = styled(Badge)(({ theme }) => ({
            '& .MuiBadge-badge': {
              backgroundColor: '#FE6B8B',
              color: '#FE6B8B',
              boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
              '&::after': {
                position: 'absolute',
                top: -1,
                left: -1,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
              },
            },
            '@keyframes ripple': {
              '0%': {
                transform: 'scale(.8)',
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
                        <img style={{ marginRight: "8px" }} src={ShtrangyIcon} />
                        <Typography variant="h6" color="primary" sx={{userSelect:"none", mr:"auto"}}>
                            Shtrangy
                        </Typography>
                        <Box display={{xs:"none", lg:"block"}}>
                        <Input
                            placeholder="Search"
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                        </Box>
                        <IconButton sx={{ml:"auto"}}><NotificationsIcon /></IconButton>
                        <IconButton ><AccountCircleIcon /></IconButton>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Semy Sharp" src="/1637677854898.jpg" sx={{pointerEvents:"none"}} />
                        </StyledBadge>
                    </Toolbar>
                </AppBar>
                <Container sx={{ color: "black", mt:"4rem", pl: "0px", height:"calc(100vh - 4rem)" }} maxWidth={false} disableGutters={true}>{this.props.children }</Container>
                </React.Fragment>
        );
    }
}

export default Layout;

