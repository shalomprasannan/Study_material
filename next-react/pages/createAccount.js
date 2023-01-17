import { TextField, Button, Card } from '@mui/material';
import {Component,useState} from 'react';
import $  from 'jquery';

 class CreateAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            username:"",
            password:"",
            confirmPassword:""
        }

    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleValidation(e){
        e.preventDefault();
        const {firstName, lastName, username, password, confirmPassword}=this.state;
        const user = {firstName, lastName, username, password};
        if(firstName && lastName && username && password && confirmPassword)
            {
                if (password === confirmPassword)
                    {
                        console.log(user)
                        $.post("http://localhost:8080/api/createAccount",user).then((data) => {
                            alert(data);
                            this.setState({
                                firstName:"",
                                lastName:"",
                                username:"",
                                password:"",
                                confirmPassword:""
                            })
                        })  
                     }
                else
                    {
                     alert("Password mismatch")
                     }
             }
        else alert("Fill all the fields");
    }
    
    render() {
        return(
            <Card sx={{display:"flex", alignItems:"center", justifyContent:"center", p:3}}>
                <form onSubmit={this.handleValidation.bind(this)}  style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                    <TextField name="firstName" placeholder="First name" value= {this.state.firstName} onChange={this.handleChange.bind(this)}/>
                    <TextField name="lastName" placeholder="Last name" value= {this.state.lastName} onChange={this.handleChange.bind(this)}/>
                    <TextField name="username" placeholder="Username" value= {this.state.username} onChange={this.handleChange.bind(this)}/>
                    <TextField name="password" type="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange.bind(this)}/>
                    <TextField name="confirmPassword" type="password" placeholder="Confirm Password" value= {this.state.confirmPassword} onChange={this.handleChange.bind(this)}/>
                    <Button type="submit">Create Account</Button>
                </form>
            </Card>
    )};
}
 
export default CreateAccount;
