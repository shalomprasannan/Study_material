import { Component } from "react";
import { TextField, Button, Grid, Card } from "@mui/material";
import CreateAccount from "./createAccount";
import $ from "jquery";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleValidation(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
        console.log("requesting")
      $.post("http://localhost:8080/api/login",{username,password}).then((data) => {
        if(data.isAuthenticated){
            cookies.set('isAuthenticated', data.oauthToken , { path: '/' });
        }
        this.setState({
          username: "",
          password: "",
        });
      });
    } else alert("Fill all the fields");
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "center", alignItems: "stretch", gap: 2 }}
        >
          <Grid
            item
            container
            sx={{
              alignItems: "stretch",
              justifyContent: "center",
              minWidth: "300px",
            }}
            xs={3}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
              }}
            >
              <form
                onSubmit={this.handleValidation.bind(this)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange.bind(this)}
                  sx={{mb:2}}  
                />
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                />
                <Button type="submit">Login</Button>
              </form>
            </Card>
          </Grid>

          <Grid
            item
            container
            sx={{
              alignItems: "stretch",
              justifyContent: "center",
              minWidth: "300px",
            }}
            xs={3}
          >
            <CreateAccount />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;
