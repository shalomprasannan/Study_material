import React, { Component } from 'react';
import {Avatar, Card, CardContent, CardHeader, CardMedia,  IconButton, Typography, Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pexels from '../Login/pexels.jpeg'

class Post extends React.Component {
    render() { 
        return (
            <Grid item xs>
            <Card sx={{minWidth:"420px"}}>
                  <CardHeader avatar={
                    <Avatar sx={{ bgcolor: "#4da" }} aria-label="recipe">
                      SR
                    </Avatar>
                  }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shalom Prasannan"
                    subheader="October 30, 2020"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://picsum.photos/720/410"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Spent a great weekend with the nature..!
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
        );
    }
}
 
export default Post;