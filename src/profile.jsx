import { Button, TextField } from '@mui/material';
import React, { Component } from 'react';
import $ from 'jquery'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state={
            notes: [{id:"1", body:"message"}],
            newMessage : ""
        }
        this.handlechange = this.handlechange.bind(this)
        this.saveMessage = this.saveMessage.bind(this)
    }
    componentDidMount(){
        $.get('/api/getmessage').then((data)=>{
            this.setState({
                notes:[...data.notes]
            })
        })
    }

    saveMessage(){
        const message = {id:this.state.notes.length+1, body:this.state.newMessage}
        $.post('api/savemessage', {newMessage:message} ).then((data)=>{
            this.setState({
                notes:[...this.state.notes, message],
                newMessage:""
            })
        })
    }

    handlechange(event){
        this.setState({
        [event.target.name] : event.target.value
        })
    }

    render() { 
        const {handleLogout} = this.props
        return (
            <div>
                <ul>
                {this.state.notes.map((note) =>{
                     return <li key={note.id} > {note.body}</li>
                    }
                )}
                </ul>
                <TextField onChange={this.handlechange} label="Your new message" name="newMessage" value={this.state.newMessage} />
                <Button variant="contained" color="primary" onClick={this.saveMessage}> Save it</Button> <br/>
                <Button variant="contained" color="warning" onClick={handleLogout}>Logout</Button>
            </div>
        )
    }
}
 
export default Profile;