import React, { Component} from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src={this.props.poster} />
    )
  }
}

// function MoviePoster() {
//   return (
//     <img src="http://image.koreatimes.com/article/2019/03/13/201903131057085c1.jpg" />
//   );
// }

export default Movie;
