import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom'


class User extends Component {

    correntUser = () =>{
        this.props.correntUser(this.props.user.id)

        
    }


    render() {
        
        return (
            
                <Link to="/catalog">
                    <span onClick={this.correntUser} id="boxName" style={{backgroundColor: this.props.user.color}}>{this.props.user.name}</span>
                </Link>
           
        );
    }
}

export default User;