import React,{Component} from 'react';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
      <h1>Redux Movies</h1>
      <div className="container">
        <MovieList/>
        <MovieDetails/>
      </div>
      </div>
    )
  }
}
export default App;