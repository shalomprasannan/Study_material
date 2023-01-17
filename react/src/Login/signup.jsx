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
  CardActionArea,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GoogleIcon from '@mui/icons-material/Google';

class Signup extends Component {
  render() {
    return (
            <Card sx={{minWidth:"300px",display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
              <CardContent sx={{minWidth:"300px", display: "flex", justifyContent: "center",pb:0}}>
                <FormControl variant="outlined" sx={{ minWidth: "80%",m:"0" }}>
                  <TextField
                    label="Full Name"
                    variant="standard"
                    margin="normal"
                  />
                  <TextField
                    label="e-mail address"
                    variant="standard"
                    margin="normal"
                  />
                  <TextField
                  label="Username"
                  variant="standard"
                  margin="normal"
                />
                  <TextField
                    label="Password"
                    variant="standard"
                    margin="normal"
                    type="password"
                  />
                  <TextField
                    label="Confirm Password"
                    variant="standard"
                    margin="normal"
                    type="password"
                  />
                  <hr />
                  <Button variant="outlined">Sign Up</Button>
                </FormControl>
              </CardContent>
              
              <Divider sx={{ mt: "5px",width:"100%" }} />
              <CardActions sx={{minWidth:"100%"}}>
                
              <Grid container justifyContent="center">
                          <Button sx={{ minWidth: "75%", mb: "5px" }} startIcon={<GoogleIcon />}>Sign in with Google</Button>
                        </Grid>
              </CardActions>
            </Card>
    );
  }
}

export default Signup;
