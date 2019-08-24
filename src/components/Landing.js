import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom'
import User from './User';

class Landing extends Component {

    render() {
        
        return (
            <div className="landing">
                <h2 className="homeTitle">Who's Watching?</h2>

                <div className="boxes">
                {this.props.users.map(u => {return <User user={u} key={u.id} correntUser={this.props.correntUser}/>})}

                </div>
                
            </div>
        );
    }
}

export default Landing;