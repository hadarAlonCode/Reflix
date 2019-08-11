import React, { Component } from 'react'

class MovieDetail extends Component {

    render() {
        console.log(this.props.match);
        let index = this.props.match.params.id
        return(
            <div className="movieDetail">
                <div>Movie Detail</div>
                <div>{this.props.movies[index].title} ({this.props.movies[index].year})</div>
                <img src={this.props.movies[index].img} style={{ width: '70vh', height: '70vh'}} />
                <div>{this.props.movies[index].descrShort}</div>
            </div>
        )
    }
}

export default MovieDetail