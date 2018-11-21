import React, { Component } from "react";
import { Icon, Input, Button, Dropdown, Confirm } from "semantic-ui-react";
import { codeBlock } from "common-tags";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedSearches: this.getStoredSearches(),
      clearOpen: false
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

    this.setState({ savedSearches: this.getStoredSearches() }); //Update stored searches
  }

  show = () => this.setState({ clearOpen: true });
  handleConfirm = () => {
    localStorage.removeItem("searches");
    this.setState({
      savedSearches: this.getStoredSearches(),
      clearOpen: false
    });
  };
  handleCancel = () => this.setState({ clearOpen: false });

  updateQuery = (e, data) => {
    document.getElementById("query").value = data.value;
  };

  render() {
    return (
      <div className="search">
        <h2>Compare players</h2>
        <p>
          Enter battlenet usernames with the tag separated by a comma <pre>,</pre><br />
          Example: <pre>Poke#1650, YourUser#3654</pre>
        </p>
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
            placeholder="Usernames separated by commas"
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
          <Button onClick={this.show} className="col1" icon>
            Clear
            <Icon name="delete" />
          </Button>
          <Confirm
            content="You are about to remove ALL your saved searches, continue?"
            cancelButton="No"
            confirmButton="Yes, Delete all"
            dimmer
            open={this.state.clearOpen}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
        </div>
        <p className="padding-top">Save your search by clicking "Save"<br />Select a saved search in the box to load it</p>
        <p>Support for PSN/XBL and Steam comming soon!</p>
      </div>
    );
  }
}

export default SearchBox;
