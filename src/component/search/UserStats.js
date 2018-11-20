import React, { Component } from "react";
import CodAPI from "../../api/cod-api/CodAPI";
import { Table } from "semantic-ui-react";
import moment from "moment";

class UserStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      shouldUpdate: true,
      isLoaded: false,
      data: [],
      users: ["izotov#1214", "ozakin#11581", "cremz#1991", "yskio#1216"]
    };
  }

  componentDidMount() {
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
      this.state.isLoaded = true;
      this.forceUpdate();
    });
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Table celled inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                {this.state.users.map(user => (
                  <Table.HeaderCell>{user}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Longest Killstreak</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>{data[user].stats.longestkillstreak}</Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>Current win streak</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>{data[user].stats.curwinstreak}</Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>Playtime</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>{time(data[user].stats.timeplayed)}</Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>K/D</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {(data[user].stats.kills / data[user].stats.deaths).toFixed(
                      2
                    )}
                  </Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>EKIA/D</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {(data[user].stats.ekia / data[user].stats.deaths).toFixed(
                      2
                    )}
                  </Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>Accuracy</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {accuracy(data[user].stats.hits, data[user].stats.misses)}
                  </Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>Total kills</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>{data[user].stats.kills}</Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>Assists</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {assists(data[user].stats.ekia, data[user].stats.kills)}
                  </Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>W/L</Table.Cell>
                {this.state.users.map(user => (
                  <Table.Cell>
                    {(data[user].stats.wins / data[user].stats.losses).toFixed(
                      2
                    )}
                  </Table.Cell>
                ))}
              </Table.Row>

              <Table.Row>
                <Table.Cell>Prestige-Level</Table.Cell>
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

function accuracy(hit, miss) { //I guess they never miss, uh?
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

/**

Assists: ekia - kills (x%)
accuracy
 */

export default UserStats;
