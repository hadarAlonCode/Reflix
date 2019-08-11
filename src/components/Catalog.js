import React, { Component } from 'react';
import Movie from './Movie';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom'



class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            movieName: ""
        }
    }

    handleInput=(e)=>{
    const value = e.target.value
    this.setState({movieName : value})
    }

    render() {
        return (
            <div className="catalogSection">
                <div className="inputAndBudjet">
                   <input type="text" placeholder="Search Movie..." onChange={this.handleInput}></input>
                   <span id="budget">Budget: {this.props.user.budget} $</span>
                </div>

               {this.props.user.rented.length > 0 ?  <div className="movieSection">
                    <div className="header">Rented:</div>
                        <div className="movies">
                        {this.props.user.rented.filter( m=> m.title.toLowerCase().includes(this.state.movieName.toLowerCase())).map(m => <Movie movie={m} user={this.props.user} key={m.id} rentMovie={this.props.rentMovie} isRented={true} removeMovie={this.props.removeMovie} />)}
                    </div>
                </div> : null }
               
                <div className="movieSection">
                    <div className="header">Catalog:</div>
                        <div className="movies">
                        {this.props.movies.filter( m=> m.title.toLowerCase().includes(this.state.movieName.toLowerCase())).map(m => <Movie movie={m} 
                            user={this.props.user} 
                            key={m.id} 
                            rentMovie={this.props.rentMovie} 
                            isRented={this.props.user.rented.find(r => r.id === m.id)}
                            removeMovie={this.props.removeMovie} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog;