import React, { Component } from 'react'
import { Icon, Input } from 'semantic-ui-react'

class SearchBar extends Component {
    render() {
      return (
        <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
      );
    }
  }

export default SearchBar;