import React, { Component } from 'react';
import $ from 'jquery';

export default class Ajaxdemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        sender:{
          username:"shalom",
          password:"Bingo"
        }
      };
    }
  
    componentDidMount() {
      $.get("https://se44j.sse.codesandbox.io/api/posts", (data, status)=>{
          this.setState({
            isLoaded: true,
            items: data.items
          });
    });
    $.post("http://localhost:8080/api/login",this.state.sender,(data,status)=>{console.log(data)})
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.Title} {item.Caption}
              </li>
            ))}
          </ul>
        );
      }
    }
  }