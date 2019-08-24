import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';

class App extends Component {
  constructor(){
    super()
    this.state = {
        movies: [
            { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.", embed:'https://www.youtube.com/embed/MwU5ZqyhV5Q' },
            { id: 1, isRented: false, title: "The Lion King", year:1994, img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.", embed:'https://www.youtube.com/embed/hY7xBISLBIA' },
            { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.", embed:'https://www.youtube.com/embed/tRlzmyveDHE' },
            { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-18nrgx5_5caaed93.jpeg?region=0%2C0%2C1000%2C1424", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.", embed:'https://www.youtube.com/embed/KnL0rYFKuL4' },
            { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.", embed:'https://www.youtube.com/embed/e3Nl_TCQXuw' },
            { id: 5, isRented: false, title: "Spider-Man: Far From Home", year: 2019, img: "https://dz7u9q3vpd4eo.cloudfront.net/admin-uploads/posters/spiderman-farfromhome-poster_1547571424.jpg?d=270x360&q=20", descrShort: "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.", embed:'https://www.youtube.com/embed/Nt9L1jCKGnE' },
            { id: 6, isRented: false, title: "The Lion King", year: 2019, img: "https://images.mymovies.net/images/film/cin/350x522/fid19112.jpg?sc=.99", descrShort: "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his.", embed:'https://www.youtube.com/embed/Raf9bVk75s8' },
            { id: 7, isRented: false, title: "Toy Story 4", year: 2019, img: "https://images.mymovies.net/images/film/cin/350x522/fid19080.jpg?sc=.99", descrShort: "Woody, Buzz and friends are enjoying their peaceful new life as Bonnie’s toys… until a new ‘toy’ shows up. Created by Bonnie herself, the reluctant Forky feels that he doesn’t belong. It’s up to Woody and the gang to help Forky settle in – and a road trip shows them that the world is a big place for a toy. This family animation is Josh Cooley’s feature-length directorial debut and stars the voices of Tom Hanks, Tim Allen, and Tony Hale.", embed:'https://www.youtube.com/embed/wmiIUN-7qhE' },

          ],
            users: [
                {id: 0, name: "Hader", color: "#5f70d8", budget: 10, rented:[]},
                {id: 1, name: "Roni", color: "#6df8ffde", budget: 10, rented:[]},
                {id: 2, name: "Shir", color: "#34f649", budget: 10, rented:[]},
                {id: 3, name: "Miri", color: "#ffeb3b", budget: 10, rented:[]}
            ],
            correntUser: false

        }
    }

    correntUser = (userId)=> {
      this.setState({correntUser: userId}, function(){
        console.log(this.state.correntUser);  
      })
    }

rentMovie = (movieId , userId, userBudget ) =>{
  let movie = this.state.movies.find(m=> m.id == movieId )
  let tempUser =[...this.state.users]
  tempUser.find(u=> u.id == userId).rented.push(movie)
  tempUser.find(u=> u.id == userId).budget = userBudget - 3
  this.setState({users: tempUser})

 
}

removeMovie=(movieId, userId, userBudget) =>{
  let movie = this.state.movies.find(m=> m.id == movieId )
  let tempUser =[...this.state.users]
  let movieIndex = tempUser.find(u => u.id == userId).rented.indexOf(movie)

  tempUser.find(u=> u.id == userId).rented.splice(movieIndex,1)
  tempUser.find(u=> u.id == userId).budget = userBudget + 3
  this.setState({users: tempUser})

  console.log("movieID " + movieId)
  console.log("userID " + userId)
}



  render() {
   
  return (
    <Router>
    <div className="App">
      <div className="Header">
        <Link className="homeBar" to="/">Home </Link>
        <span id="logo">REFLIX</span>
      </div>
    
      <Route path="/" exact render={() => <Landing users={this.state.users} correntUser={this.correntUser}/>} />
      <Route path="/catalog" exact render={() => <Catalog movies={this.state.movies} user={this.state.users[this.state.correntUser]} rentMovie={this.rentMovie} removeMovie={this.removeMovie} />} />
      <Route path="/movies/:id" exact render={({ match }) => <MovieDetail match={match} movies={this.state.movies} />}/>

    </div>
    </Router>
  );
}

}


export default App;