import React, { Component } from 'react'

class MovieDetail extends Component {

    render() {
        console.log(this.props.match);
        let index = this.props.match.params.id
        return (
            <div className="movieDetail">
                <div className="detailTitle">Movie Detail & Trailer</div>
                <div className="moveTitlePage">{this.props.movies[index].title} ({this.props.movies[index].year})</div>
                <img src={this.props.movies[index].img} style={{ width: '43vh', height: '50vh', margin:'5px' }} />
                <iframe style={{ width:"60vh", height:"50vh", margin:"5px"}}
                    src={this.props.movies[index].embed}>
                </iframe>
                <div className="details">{this.props.movies[index].descrShort}</div>
            </div>
        )
    }    
}



export default MovieDetail