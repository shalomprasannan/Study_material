import { Button, Container, Grid, Input } from "@mui/material";
import Header from "./header";
import React from 'react';
import $ from 'jquery';

class MyProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            image:"",
            newImage:"",
            field:""
        }
        this.uploadImage=this.uploadImage.bind(this)
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }

    uploadImage(images) {
        const formData = new FormData();
        formData.append(
            this.state.field,
            images,
            images.name
        );
        formData.append("fieldname",this.state.field)
        $.ajax({url:"/api/upload",
                method:"POST",
                data: formData,
                processData: false,
                contentType: false,
                withCredentials: true,
                enctype:"multipart/form-data"})
                .then((data) => {
                    this.setState({
                        newImage:"/"+data
                    })
                    console.log(this.state.newImage)
                })
    }

    onChangeHandler(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() { 
        const {image, newImage}=this.state;
        return (
            <Grid container sx={{height:"100vh",alignItems:"center", justifyContent:"center" }}>
                <Grid item xs={4}>
                    <Button
                        variant="outlined"
                        component="label"
                    > Select Image
                        <input hidden type="file" /*accept="image/*"*/ multiple onChange={(event) => {
                            this.setState({image:event.target.files[0]})
                            console.log(event.target.files[0])
                        }} />
                    </Button>
                    <Button variant="contained" onClick={() => this.uploadImage(image)}>Upload</Button>
                    <Input onChange={this.onChangeHandler} value={this.state.field} name="field" />
                </Grid>
                
                <Grid item xs={4}>
                    {image && <img src={URL.createObjectURL(image)} style={{maxWidth:"100%"}} />}
                    {newImage && <img src={newImage} />}
                </Grid>
            </Grid>
        );
    }
}
 
export default MyProfile;
