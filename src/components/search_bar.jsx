import React, { Component } from 'react';

class SearchBar extends Component {
  // SearchBar is called on App with props as searchFunction
  // this way we can use it here as props
  handleUpdate = (event) => {
    // console.log(event.target.value) // log each letter typed
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
