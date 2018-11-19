import React, { Component } from "react";
import SearchBar from "./SearchBar";

class SearchBox extends Component {
  render() {
    return (
      <div className="search">
        <h1>Search user</h1>
        <SearchBar />
      </div>
    );
  }
}

export default SearchBox;
