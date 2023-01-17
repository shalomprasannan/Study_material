import Protected from "./protected";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import React from "react";
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
import Profile from "./profile";
import Cookies from'universal-cookie'
const exec = require('child_process').exec;

const cookies = new Cookies();
class App extends React.Component {
  constructor(props) {
    super(props); 
    const isAuth= cookies.get('isAuth') ? cookies.get('isAuth') : "false"
    this.state = {
      username: "abc",
      password: "abc",
      isAuth:isAuth,
      firstName:""
    };
    this.changeHandler=this.changeHandler.bind(this);
    this.submitHandler=this.submitHandler.bind(this);
    this.logout=this.logout.bind(this);
  }

  changeHandler(e){
    this.setState({
        [e.target.placeholder]:e.target.value
    })
    console.log(this.state.username)
}

submitHandler= () =>{
    const{username, password}=this.state, data={username, password}

    $.post("http://localhost:8080/api/login", data)
    .then((res)=>{
        this.setState({
            isAuth:res.isAuth,
            firstName:res.firstName
        })
        cookies.set('isAuth', this.state.isAuth,{path: '/'})
    })
}

logout(){
  cookies.set('isAuth', "false",{path: '/'})
  this.setState({
    isAuth:"false"
  })
  console.log("logout")
  
}

// componentWillMount(){
//   const isAuth=cookies.get("isAuth")
//   const {username, password} = this
//   $.post("http://localhost:8080/api/login", data)
//     .then((res)=>{
//         this.setState({
//             isAuth:res.isAuth,
//             firstName:res.firstName
//         })
//         cookies.set('isAuth', this.state.isAuth,{path: '/'})
//     })

// }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">protected</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
          </ul>
          <p>{this.state.firstName}</p>
          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route path="/protected">
            {this.state.isAuth ==="true" ? <Protected {...this} /> : <Redirect to="/login"/>}
            </Route>
            <Route path="/login">
            {this.state.isAuth ==="false" ? <Login {...this} /> :<Redirect to="/protected"/>}
            </Route>
            <Route path="/profile">
            {this.state.isAuth ==="true" ? <Profile {...this} /> :<Redirect to="/login"/>}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
