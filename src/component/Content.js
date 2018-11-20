import React, { Component } from "react";
import SearchBox from "./search/SearchBox";
import UserStats from "./stats/UserStats";

class Content extends Component {
  render() {
    return (
      <main className="col12 colm12 colt12">
        <SearchBox />
        <UserStats />
      </main>
    );
  }
}

export default Content;
