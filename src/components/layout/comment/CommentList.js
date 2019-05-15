import React, { Component } from 'react';

import Comment from './Comment';

class CommentList extends Component {
  state = {
    title: "Comments",
    subtitle: "Subtitle",
    number: 5,
    array: [1,2,3],
    object: {
      hero: "Batman",
      villain: "Joker"
    },
  }
  render() {
    return (
      <div className="form-group">
        <h1>{this.state.title}</h1>
        <h2>{this.state.subtitle}</h2>
        <p>{this.state.object.hero}</p>
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default CommentList;
