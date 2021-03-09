import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    // Guard close - test if id meets a certain condition
    // this way the Gif will be empty waiting for you to select a gif
    if (!this.props.id) { return null; }

    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
