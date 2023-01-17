import React, { Component } from 'react';
import {Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Chip, Button, Box} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WorkIcon from '@mui/icons-material/Work';
import FilePresentIcon from '@mui/icons-material/FilePresent';
class JobPostNano extends Component {
    state = {  } 
    render() { 
        return (
            <Card sx={{width:"400px", my:"16px", mx:"auto", display:"flex", justifyContent:"stretch", height:"100px"}}>
                <div style={{display:"flex", alignItems:"center", backgroundColor:"#d56", padding:"16px", marginRight:"8px"}}>
                            <WorkIcon sx={{height:"50px", width:"50px", cursor:"pointer", color:"white"}}/>
                </div>
                <Box >
                    <h4 style={{margin:"3px"}}>Need a Fancy website</h4>
                    <p style={{margin:"3px"}}>We need a Fancy website to showcase the ...</p>
                    <div style={{display:"flex"}}>
                        <div style={{marginRight:"0px", marginLeft:"auto", color:"#666", fontSize:"13px"}}>
                            September 14, 2021
                            </div>
                    </div>
                </Box>
                <CardActions></CardActions>
                
            </Card>
        );
    }
}
 
export default JobPostNano;