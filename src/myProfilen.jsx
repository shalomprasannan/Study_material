import React, { Component } from 'react';
import { Button, Container, Grid, Input } from "@mui/material";
import $ from 'jquery';

class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePicture: "",
            profilePictureURL: "",
            post: "",
            postURL: "",
            field: ""
        }
        this.uploadImage = this.uploadImage.bind(this)
    }

    uploadImage(e) {
        if (this.state[e.target.name]) {
            const formData = new FormData();
            formData.append(
                e.target.name,
                this.state[e.target.name],
            );
            formData.append("fieldname", e.target.name );
            $.ajax({
                url: "/api/upload",
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                withCredentials: true,
                enctype: "multipart/form-data"
            })
                .then((data) => {
                    console.log(e.target.name)
                    this.setState({
                        [e.target.name+"URL"]: "/" + data
                    })
                    console.log(this.state[e.target.name])
                })

        }
    }

    render() {
        const { profilePicture, newImage } = this.state;
        return (
            <Grid container sx={{ alignItems: "center", justifyContent: "center", maxHeight: "100%" }} direction="column">
                <Grid item sx={{ flex: "0 1 auto" }}>
                    Shalom
                </Grid>

                <Grid container item sx={{ flex: "0 1 auto" }}>
                    <Grid item xs={4}>
                        <Button
                            variant="outlined"
                            component="label"
                        > Select Dp Image
                            <input hidden type="file" /*accept="image/*"*/ multiple onChange={(event) => {
                                this.setState({ profilePicture: event.target.files[0] })
                                console.log(event.target.files[0])
                            }} />
                        </Button>
                        <Button variant="contained" name="profilePicture" onClick={(e) => this.uploadImage(e)}>Upload</Button>
                    </Grid>

                    <Grid item xs={4}>
                        <Button
                            variant="outlined"
                            component="label"
                        > Select Post Image
                            <input hidden type="file" /*accept="image/*"*/ multiple onChange={(event) => {
                                this.setState({ post: event.target.files[0] })
                                console.log(event.target.files[0])
                            }} />
                        </Button>
                        <Button variant="contained" name="post" onClick={(e) => this.uploadImage(e)}>Upload</Button>
                    </Grid>
                    <img src={this.state.profilePictureURL} alt="DP" />
                    <img src={this.state.postURL} alt="post"/>
                </Grid>
            </Grid>
        );
    }
}

export default MyProfile;