import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@emotion/react';
import theme from '../Login/theme'
import Post from './post';



class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar color="transparent" sx={{ boxShadow: "inset 0px -1px 1px #444", backdropFilter: "blur(20px)" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Shtrangy
              </Typography>
              <IconButton color="inherit" sx={{ mr: 2 }}><AccountCircleIcon /></IconButton>
              <IconButton color="inherit" sx={{ mr: 2 }}><NotificationsIcon /></IconButton>
              <Menu
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
            </Toolbar>
          </AppBar>

          <Toolbar />
            <Grid container justifyContent="center" >
              <Grid item xs={4} spacing={1} container direction="column" alignContent="center">
                <Post />
                <Post />
                <Post />
                <Post />
              </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
    );
  }
}

export default Home;