import React, { Component } from 'react';

class SearchBar extends Component {
  // With any type of form functionality
  // it's usefull to keep track of the value inside input
  // controlled component - the input value is bound to the internal state of the component
  constructor(props) {
    super(props);

    this.state = {
      term: "" // deafult value empty string
    };
  }

  // SearchBar is called on App with props as searchFunction
  // this way we can use it here as props
  handleUpdate = (event) => {
    // console.log(event.target.value) // log each letter typed
    // we call on the method searchFunction - defined & passed by the parent App (props)
    this.props.searchFunction(event.target.value);
    // change the state of term - component is updated
    this.setState({
      term: event.target.value
    });
  }

  render() {
    // the onChange method handles the change on the input
    // value keeps track of the value of the input
    return (
      <input value={this.state.term} type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
