import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {
  Divider,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

class Signup extends Component {

  validation(e){
    e.preventDefault();
    const {createUsername, createPassword, createCPassword, createFullName, createEmail, setMessage} = this.props;
    createPassword === createCPassword ? this.props.handleSignup(): setMessage("Password mismatch")
  }


  render() {
    const {createUsername, createPassword, createCPassword, createFullName, createEmail, handleChange} = this.props;
    return (
            <Card sx={{minWidth:"300px",display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
              <CardContent sx={{minWidth:"300px", display: "flex", justifyContent: "center",pb:0}}>
                <FormControl component="form" variant="outlined" sx={{ minWidth: "80%",m:"0" }} onSubmit={this.validation.bind(this)}>
                  <TextField
                    label="Full Name"
                    variant="standard"
                    margin="normal"
                    name="createFullName"
                    value={createFullName}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="e-mail address"
                    variant="standard"
                    margin="normal"
                    name="createEmail"
                    value={createEmail}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Username"
                    variant="standard"
                    margin="normal"
                    name="createUsername"
                    value={createUsername}
                    onChange={handleChange}
                    required
                />
                  <TextField
                    label="Password"
                    variant="standard"
                    margin="normal"
                    type="password"
                    name="createPassword"
                    value={createPassword}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Confirm Password"
                    variant="standard"
                    margin="normal"
                    name="createCPassword"
                    type="password"
                    value={createCPassword}
                    onChange={handleChange}
                    required
                  />
                  <hr />
                  <Button variant="outlined" type="submit">Sign Up</Button>
                </FormControl>
              </CardContent>
              
              <Divider sx={{ mt: "5px",width:"100%" }} />
              <CardActions sx={{minWidth:"100%"}}>
                
              <Grid container justifyContent="center">
                          <Button sx={{ minWidth: "75%", mb: "5px" }} startIcon={<GoogleIcon />}>Sign up with Google</Button>
                        </Grid>
              </CardActions>
            </Card>
    );
  }
}

export default Signup;
