import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom'
import Login from './login';
import Profile from './profile';
import Home from './home';
import $ from 'jquery'
import Signup from './Signup';
import MainPage from './mainPage';
import MyProfile from './myProfile';
import Header from './header';
import Friends from './friends';
import JobPost from './jobPost';
import PostCreator from './postCreator'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            inputUsername:"",
            inputPassword:"",
            createUsername:"",
            createPassword:"",
            createCPassword:"",
            createFullName:"",
            createEmail:"",
            username:"",
            password:"",
            firstName:"",
            lastName:"",
            isAuth:false, //get cookie state when loading...
            message:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.setMessage = this.setMessage.bind(this)
    }

    componentWillMount(){
        this.handleLogin();
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSignup(){
        let {createUsername, createPassword, createFullName, createEmail } = this.state;
        let data = {createUsername, createPassword, createFullName, createEmail }
        $.post("/api/signup", data)
        .then((res)=>{
            this.setState({
                message:res.message,
                createUsername:"",
                createPassword:"",
                createCPassword:"",
                createFullName:"",
                createEmail:""
            })
        })
    }

    handleLogin(e){
        e && e.preventDefault();
        let data = {...this.state}
        $.post("/api/login", data)
        .then((res)=>{
            this.setState({
                message:res.message,
                isAuth:res.isAuth,
                inputUsername:"",
                inputPassword:""
            })
        })
    }

    handleLogout(){
        $.get("/api/logout")
        .then((res)=>{
            console.log(res);
            this.setState({
                message:res.message,
                isAuth:res.isAuth
            })
        })
    }

    setMessage(message){
        this.setState({
            message
        })
    }

    render() { 
        const propsMethod ={
            handleLogin:this.handleLogin, 
            handleLogout:this.handleLogout,
            handleChange:this.handleChange,
            handleSignup:this.handleSignup,
            setMessage:this.setMessage
        }
        return (
            <Router>
                {/* <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                <hr/> */}
                <Switch>
                    <Route exact path="/login" >
                        {!this.state.isAuth ? <Login {...this.state} {...propsMethod}/> : <Redirect to="/profile" />}
                    </Route>
                    <Route exact path="/profile" >
                        {this.state.isAuth ? <Profile {...this.state} {...propsMethod}/> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/home" >
                        <Home {...this.state} {...propsMethod}/>
                    </Route>
                    <Route exact path="/main" >
                        <Header {...this.state} {...propsMethod}/>
                    </Route>
                    <Route exact path="/myprofile" >
                        <MyProfile {...this.state} {...propsMethod}/>
                    </Route>
                    <Route exact path="/friends" >
                        <Friends {...this.state} {...propsMethod}/>
                    </Route>
                    <Route exact path="/admin" >
                        <PostCreator {...this.state} {...propsMethod}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
 
export default App;