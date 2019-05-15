import React, { Component } from 'react';

class About extends Component {
  render() {
    const { phrase1, phrase2, phrase3 } = this.props
    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">{phrase1}</h5>
        <div className="m-3">
          <p>{phrase2}</p>
          <p>{phrase3}</p>
        </div>
      </div>
    );
  }
}

export default About;
