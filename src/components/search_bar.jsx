import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    // console.log(event.target.value) // log each letter typed

  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
