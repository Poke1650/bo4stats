import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <footer className="col12 colm12 colt12">
        <a href="http://www.github.com/Poke1650/bo4stats">
          Fork on Github <Icon name="github" size="large" />
        </a>{" "}
        - Powered by&nbsp;{" "}
        <a href="https://callofdutytracker.com/site-api">
          callofdutytracker.com
        </a>
      </footer>
    );
  }
}

export default Footer;
