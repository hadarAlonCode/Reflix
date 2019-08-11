import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'


class Movie extends Component {
  
    rentMovie = () => {
        this.props.user.budget < 3 ?  alert("you dont have enoth money")  : this.props.rentMovie(this.props.movie.id , this.props.user.id , this.props.user.budget )
        
        
    }

    removeMovie = () => {
        this.props.removeMovie(this.props.movie.id , this.props.user.id , this.props.user.budget)
    }


    render() {


        return (
            <div className="movieBox"
                style={{backgroundImage: `url(${this.props.movie.img})`}} >  
                 {this.props.isRented ? 
                 <i className="fas fa-minus-circle" onClick={this.removeMovie}></i> 
                 : 
                 <i className="fas fa-plus-circle" onClick={this.rentMovie} ></i>}
                 <Link to= {`/movies/${this.props.movie.id}`}><i class="fas fa-info-circle"></i></Link>
            </div>
               
        )}
        
}
    


export default Movie;