import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    // list patterns - map an array of props
    // React needs a unique key
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;

// +
// Destructuring - take props with keys
// and display them in several variables
// making it possible to not use props.gifs
// const GifList = ({ gifs, selectGif }) => {
//   return (
//     <div>
//       {gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />)}
//     </div>
//   );
// };
