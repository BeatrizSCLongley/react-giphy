import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };

    // this.search('women'); // to test
  }

  // search function to call an API
  search = (query) => {
    giphy('qivgRDsNTVi0IFStWIWuW8ttG4Kl9ikY').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  // function to handle click gif-list & link it to the stand-alone Gif
  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    // const gifs = [{ id: "pJhT0A3nsQRU3XgMhB" }, { id: "UwrqHwuNj2QQSgHq7Z" }];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
