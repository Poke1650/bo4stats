import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class RatioStatRow extends Component {
  render() {
    let data = this.props.data.data;
    let users = this.props.data.users;
    let stats = this.props.stats;
    let precision = this.props.precision === undefined ? 2 : this.props.precision;
    let title = this.props.title;
    return (
      <Table.Row>
        <Table.Cell>{title}</Table.Cell>
        {users.map(user => (
          <Table.Cell>
            {this.ratio(data[user].stats[stats[0]], data[user].stats[stats[1]], precision)}
          </Table.Cell>
        ))}
      </Table.Row>
    );
  }

  ratio(val1, val2, precision = 2) {
    return (val1 / val2).toFixed(precision);
  }
}

export default RatioStatRow;
