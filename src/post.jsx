import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import React, { Component } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pexels from './pexels.jpeg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatIcon: false,
            like: false,
        }
        this.iconChanger = this.iconChanger.bind(this)
        this.like = this.like.bind(this)
    }

    iconChanger() {
        this.setState({
            chatIcon: !this.state.chatIcon
        })
    }

    like() {
        this.setState({
            like: !this.state.like
        })
    }

    render() {
        var { chatIcon } = this.state;
        return (

            <Card sx={{ my: "16px", backgroundColor: "#eee" }} elevation={3}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia src={pexels} height="200" component="img" />
                <CardContent>
                    Hi, How are you</CardContent>
                <CardActions>
                    <IconButton onClick={this.like}>{this.state.like ? <FavoriteIcon sx={{ color: "#f35" }} /> : <FavoriteIcon />}</IconButton>
                    <Input
                        placeholder="Comment"
                        style={{ marginLeft: "auto" }}
                        onFocus={this.iconChanger}
                        onBlur={this.iconChanger}
                        endAdornment={
                            <InputAdornment position="start">
                                {this.state.chatIcon ? <SendIcon color="primary" /> : <ChatBubbleIcon />}
                            </InputAdornment>
                        }
                    />
                </CardActions>
            </Card>
        );
    }
}

export default Post;