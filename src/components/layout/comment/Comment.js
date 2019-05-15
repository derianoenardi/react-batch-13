import React, { Component } from 'react';

class Comment extends Component {

  state = {
    imgSrc: "https://via.placeholder.com/150",
    altImg: "avatar",
    media: {
      heading: "Media Heading",
      paragraph: "Lorem ipsum dolor sit amet"
    }
  }
  render() {
    return (
      <div className="media mb-3 mt-2">
        <img src={this.state.imgSrc} class="mr-3" alt={this.state.altImg} />
        <div className="media-body">
          <h5 className="mt-0">{this.state.media.heading}</h5>
          {this.state.media.paragraph}
        </div>
      </div>
    );
  }
}

export default Comment;
