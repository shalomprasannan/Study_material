import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import pexels from "./pexels.jpeg";
import {
  accordionActionsClasses,
  Divider,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Signup from "./signup";
import './login.css';
import theme from './theme.jsx';
import { ThemeProvider } from "@emotion/react";
import $ from 'jquery'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleButtonClicked(e) {
    e.preventDefault();
    const {username,password}=this.state;
    $.post("http://localhost:8080/api/login",{username, password}).done((data)=>{alert(data)});
    this.clearState();
  };

  clearState(){
    this.setState({username: "", password:"" });
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment >
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh", minWidth: "100%" }}
          >
            <Grid item xs={12} container alignItems="stretch" justifyContent="center" direction="row" sx={{gap: 1, m:"10px"}}>
              <Grid item xs={3} sx={{ minWidth: "300px", display:"flex",alignItems:"stretch",justifyContent:"center" }}>
                <Card sx={{minWidth:"300px"}}>
                  <Grid container alignItems="center" justifyContent="center" >
                    <AccountCircleIcon  sx={{fontSize:"11rem", mt:"10px"}}/>
                    </Grid>
                      <CardContent sx={{ display: "flex", justifyContent: "center", pb: "0" }}>
                        <FormControl component="form" variant="outlined" sx={{ minWidth: "80%", m: "0" }} onSubmit={this.handleButtonClicked.bind(this)}>
                          <TextField
                            value={this.state.username}
                            label="Username"
                            name="username"
                            variant="standard"
                            margin="normal"
                            required
                            onChange={this.handleInputChange}
                          />
                          <TextField
                            value={this.state.password}
                            label="Password"
                            name="password"
                            type="password"
                            variant="standard"
                            margin="normal"
                            required
                            onChange={this.handleInputChange}
                          />
                          <hr />
                          <Button variant="outlined" type="submit">Login</Button>
                        </FormControl>
                      </CardContent>

                      <Divider sx={{ mt: "5px" }} />
                      <CardActions sx={{padding:"5px"}}>
                        <Grid container justifyContent="center">
                        <Grid item xs container justifyContent="center">
                          <Button sx={{ minWidth: "75%" }} startIcon={<GoogleIcon />}>Sign in with Google</Button>
                          </Grid>
                          <Divider sx={{ m: "5px",width:"100%" }} />
                          <Grid item xs container justifyContent="center">
                          <Button sx={{ minWidth: "75%", mb: "5px" }} startIcon={<FacebookIcon />}>Sign in with Facebook</Button>
                          </Grid>
                        </Grid>
                      </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3} sx={{ minWidth: "300px" }} container>
                <Signup />
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Login;
