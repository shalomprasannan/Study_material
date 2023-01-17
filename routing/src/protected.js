import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Protected extends React.Component {
    render() { 
        return (
            <div>
            Protected, And logged in..!
            <Link to="/profile">profile</Link>
        </div>
    );
    }
}
 
export default Protected;