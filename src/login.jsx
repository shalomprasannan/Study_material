import React, { Component } from 'react';
import  { Grid, Button, Card, CardActions, CardContent, Divider, FormControl, TextField, CardMedia } from '@mui/material'
import pexels from './pexels.jpeg'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Signup from './Signup';

class Login extends React.Component {
    render() { 
        const {inputUsername, inputPassword, handleChange, handleLogin, message} = this.props;
        return (
        <div 
        style={{
          marginLeft:"auto", 
          marginRight:"auto"
          }}>
            {/* <input placeholder="username" name = {"inputUsername"} value={inputUsername} onChange={handleChange} /> <br/>
            <input placeholder="password" name = {"inputPassword"} value={inputPassword} onChange={handleChange} /> <br/>
            <button onClick={handleLogin} >Login</button>
            {message && <p>{message}</p>} */}
        


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
                  <CardMedia
                        component="img"
                        height="194"
                        image={pexels}
                        alt="Paella dish"
                      />
                    </Grid>
                      <CardContent sx={{ display: "flex", justifyContent: "center", pb: "0" }}>
                        <FormControl component="form" variant="outlined" sx={{ minWidth: "80%", m: "0" }} onSubmit={handleLogin.bind(this)}>
                          <TextField
                            variant="standard"
                            margin="normal"
                            required
                            label="username" name = {"inputUsername"} value={inputUsername} onChange={handleChange}
                          />
                          <TextField
                            label="Password"
                            type="password"
                            variant="standard"
                            margin="normal"
                            required
                            name = {"inputPassword"} value={inputPassword} onChange={handleChange}
                          />
                          <hr />
                          <Button variant="outlined" type="submit">Login</Button>
                        </FormControl>
                      </CardContent>

                      <Divider sx={{ mt: "5px" }} />
                      <CardActions sx={{padding:"5px", backgroundColor:"#f5f5ff"}}>
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
                <Signup  {...this.props} />
              </Grid>  
            </Grid>
            
          {message && <p>{message}</p>}
          </Grid>
        </div>
    )}
}
 
export default Login;