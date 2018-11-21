import React, { Component } from "react";
import { Icon, Input, Button, Dropdown } from "semantic-ui-react";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedSearches: this.getStoredSearches()
    };
  }

  getStoredSearches() {
    let searches = localStorage.getItem("searches");
    return searches === null ? [] : JSON.parse(searches);
  }

  saveQuery() {
    let query = document.getElementById("query").value;

    let searches = localStorage.getItem("searches");
    let searchArray = searches === null ? [] : JSON.parse(searches);
    searchArray.push({ id: 1, value: query, text: query });
    localStorage.setItem("searches", JSON.stringify(searchArray));

    this.setState({savedSearches: this.getStoredSearches()}); //Update stored searches
  }

  deleteQuery() {}

  updateQuery = (e, data) => {
    document.getElementById("query").value = data.value;
  };

  render() {
    return (
      <div className="search">
        <h1>Search users</h1>
        <div className="col12 colt12 colm12">
          <Input
            id="query"
            className="col6 colt6 colm11"
            icon={
              <Icon
                name="search"
                inverted
                circular
                link
                onClick={() =>
                  this.props.searchHandler(
                    document.getElementById("query").value
                  )
                }
              />
            }
            placeholder="Separated by , or spaces"
          />
        </div>

        <div className="col12 colt12 colm12 padding-top">
          <Dropdown
            className="col4 colt12 colm12"
            placeholder="Searches"
            selection
            options={this.state.savedSearches}
            onChange={this.updateQuery}
          />
          <Button onClick={() => this.saveQuery()} className="col1" icon>
            Save
            <Icon name="save outline" />
          </Button>
          <Button onClick={() => this.deleteQuery()} className="col1" icon>
            Delete
            <Icon name="delete" />
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
