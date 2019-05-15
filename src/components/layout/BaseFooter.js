import React, { Component } from 'react';

class BaseFooter extends Component {
  state = {
    copyright: "Copyright Hactiv8 2018"
  }
  render() {
    return (
      <div className="base-footer">
        {this.state.copyright}
      </div>
    );
  }
}

export default BaseFooter;
