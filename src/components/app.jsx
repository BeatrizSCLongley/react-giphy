import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "pJhT0A3nsQRU3XgMhB"
    };
  }

  // search function to call an API
  search = (query) => {

  }

  render() {
    // const gifs = [{ id: "pJhT0A3nsQRU3XgMhB" }, { id: "UwrqHwuNj2QQSgHq7Z" }];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
