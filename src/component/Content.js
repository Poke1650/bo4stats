import React, { Component } from "react";
import SearchBox from "./search/SearchBox";
import UserStats from "./stats/UserStats";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  handleSearch(query) {
    let usersSearched = query.split(/[\s,;]+/);
    this.setState({ users: usersSearched });
  }

  render() {
    return (
      <main className="col12 colm12 colt12">
        <SearchBox searchHandler={this.handleSearch.bind(this)} />
        {this.state.users.length !== 0 ? (
          <UserStats users={this.state.users} />
        ) : null}
      </main>
    );
  }
}

export default Content;
