import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Old Boy",
  "alladin",
  "Spider Man"
];

const movieImages = [
  "http://image.koreatimes.com/article/2019/03/13/201903131057085c1.jpg",
  "http://image.koreatimes.com/article/2019/03/13/201903131057085c1.jpg",
  "http://image.koreatimes.com/article/2019/03/13/201903131057085c1.jpg",
  "http://image.koreatimes.com/article/2019/03/13/201903131057085c1.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[0]} poster={movieImages[1]}/>
        <Movie title={movieTitles[0]} poster={movieImages[2]}/>
        <Movie title={movieTitles[0]} poster={movieImages[3]}/>        
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Movie title={movies[0]}/>
//       <Movie title={movies[1]}/>
//       <Movie title={movies[2]}/>
//       <Movie title={movies[3]}/>
//     </div>
//   );
// }

export default App;
