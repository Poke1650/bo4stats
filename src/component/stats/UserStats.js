import React, { Component } from "react";
import CodAPI from "../../api/cod-api/CodAPI";
import { Table, Loader } from "semantic-ui-react";
import moment from "moment";

import SimpleStatRow from "./SimpleStatRow";
import RatioStatRow from "./RatioStatRow";

class UserStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      shouldUpdate: true,
      isLoaded: false,
      data: [],
      users: this.props.users
    };
  }

  query() {
    let querries = [];

    this.state.users.forEach(user => {
      querries.push(
        CodAPI.getUserStats(user).then(
          result => {
            this.state.data[user] = result;
          },
          error => {
            this.setState({ isLoaded: true, error });
          }
        )
      );
    });

    Promise.all(querries).then(() => {
      this.setState({ isLoaded: true });
    });
  }

  componentDidMount() {
    this.query();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ users: newProps.users, isLoaded: false }, () => this.query());
  }

  render() {
    const { error, isLoaded, data } = this.state;

    const userxdata = {
      users: this.state.users,
      data: data
    };

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <Loader active inline='centered' />
      )
    } else {
      return (
        <div>
          <Table celled inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                {this.state.users.map(user => (
                  <Table.HeaderCell key={user}>{user}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <SimpleStatRow
                data={userxdata}
                stat="longestkillstreak"
                title="Longest Killstreak"
              />

              <SimpleStatRow
                data={userxdata}
                stat="curwinstreak"
                title="Current win streak"
              />

              <Table.Row>
                <Table.Cell collapsing>Playtime</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>{time(data[user].stats.timeplayed)}</Table.Cell>
                ))}
              </Table.Row>

              <RatioStatRow
                data={userxdata}
                stats={["kills", "deaths"]}
                title="K/D"
              />

              <RatioStatRow
                data={userxdata}
                stats={["ekia", "deaths"]}
                title="EKIA/D"
              />

              <Table.Row>
                <Table.Cell collapsing>Accuracy</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {accuracy(data[user].stats.hits, data[user].stats.misses)}
                  </Table.Cell>
                ))}
              </Table.Row>

              <SimpleStatRow
                data={userxdata}
                stat="kills"
                title="Total kills"
              />

              <Table.Row>
                <Table.Cell collapsing>Assists</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {assists(data[user].stats.ekia, data[user].stats.kills)}
                  </Table.Cell>
                ))}
              </Table.Row>

              <RatioStatRow
                data={userxdata}
                stats={["wins", "losses"]}
                title="W/L"
              />

              <Table.Row>
                <Table.Cell collapsing>Prestige-Level</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {data[user].stats.prestige} - {data[user].stats.level}
                  </Table.Cell>
                ))}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      );
    }
  }
}

function accuracy(hit, miss) {
  //I guess they never miss, uh?
  let accuracy = hit / miss;
  let percent = (accuracy * 100).toFixed(2);
  return `${percent}%`;
}

function assists(ekia, kills) {
  let assists = ekia - kills;
  let percentage = ((assists * 100) / ekia).toFixed(0);
  return `${assists} (${percentage}%)`;
}

function time(seconds) {
  let duration = moment.duration(seconds * 1000);
  let days = Math.floor(duration.asDays());
  let hours = Math.floor(duration.asHours() - days * 24);
  return `${days}d ${hours}h`;
}

export default UserStats;
