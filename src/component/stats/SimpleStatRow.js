import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class SimpleStatRow extends Component {
  render() {
    let data = this.props.data.data;
    let users = this.props.data.users;
    let stat = this.props.stat;
    let title = this.props.title;
    return (
      <Table.Row>
        <Table.Cell>{title}</Table.Cell>
        {users.map(user => (
          <Table.Cell>{data[user].stats[stat]}</Table.Cell>
        ))}
      </Table.Row>
    );
  }
}

export default SimpleStatRow;
