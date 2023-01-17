import React, { Component } from 'react';
import {Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Chip, Button} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WorkIcon from '@mui/icons-material/Work';
import FilePresentIcon from '@mui/icons-material/FilePresent';
class JobPost extends Component {
    state = {  } 
    render() { 
        return (
            <Card sx={{width:"400px", my:"16px", mx:"auto"}}>
                {/*<CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            <WorkIcon/>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Job Title"
                    subheader="September 14, 2021"
                />*/}
                <div style={{display:"flex", justifyContent:"right", backgroundColor:"#65f", height:"40px"}}>
                    <Avatar sx={{ bgcolor:"#65f", cursor:"pointer" }} aria-label="recipe">
                            <WorkIcon/>
                        </Avatar>
                </div>
                <CardContent style={{paddingTop:"3px"}}>
                <h4 style={{marginTop:"3px"}}>Need a Fancy website</h4>
                <p>We need a Fancy website to showcase the products 
                    we have in our boutique, we have attached the sktch and ideas we have about it, 
                    please go through it and let us know if you need any further info</p>
                <i>Note: we need this completed within today</i>
                <div>
                    <div style={{marginTop:"15px"}}>
                        <Chip color="success" label="HTML" sx={{mx:"3px"}}/> 
                        <Chip color="success" label="CSS"  sx={{mx:"3px"}} />
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{marginRight:"0px", marginLeft:"auto", color:"#666", fontSize:"13px"}}>
                        September 14, 2021
                        </div>
                </div>
                <div style={{display:"flex"}}>
                    <a href="/files/pexels.jpeg" download> <IconButton><FilePresentIcon/></IconButton></a>
                    <IconButton><FilePresentIcon/></IconButton>
                </div>
                </CardContent>
                <CardActions></CardActions>
                
            </Card>
        );
    }
}
 
export default JobPost;