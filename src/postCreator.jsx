import React, { Component } from 'react';
import {Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Chip, Button, Input, TextField} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WorkIcon from '@mui/icons-material/Work';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import UploadFileIcon from '@mui/icons-material/UploadFile';
class PostCreator extends Component {
    state = {  } 
    render() { 
        return (
            <Card sx={{width:"400px", my:"16px", mx:"auto"}}>
                <div style={{display:"flex", justifyContent:"right", backgroundColor:"#00c853", height:"40px"}}>
                    <Avatar sx={{ bgcolor:"#00c853", cursor:"pointer" }} aria-label="recipe">
                            <WorkIcon/>
                        </Avatar>
                </div>
                <CardContent style={{paddingTop:"3px"}}>
                <Input sx={{mt:"8px"}} placeholder="Job Title" ></Input>
                <TextField sx={{mt:"8px", width:"100%"}} multiline rows={5} label="Describe the Job in detail"></TextField>
                <Input sx={{mt:"8px"}} placeholder="Notes (Optional)" ></Input>
                <div>
                    <div style={{marginTop:"15px"}}>
                    <Input sx={{mt:"8px", width:"100%"}} placeholder="Seperate each Skills with SemiColon (;)" ></Input>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                <IconButton sx={{width:"50px", height:"50px"}}
                        variant="outlined"
                        component="label"
                    > <UploadFileIcon/>
                        <input hidden type="file" /*accept="image/*"*/ multiple onChange={(event) => {
                            /*this.setState({image:event.target.files[0]})
                            console.log(event.target.files[0])*/
                        }} />
                    </IconButton> <p>Attach files</p>
                </div>
                <div style={{display:"flex"}}>
                <Button sx={{ml:"auto", mr:"0px"}}>Post</Button>
                </div>
                </CardContent>
                
            </Card>
        );
    }
}
 
export default PostCreator;