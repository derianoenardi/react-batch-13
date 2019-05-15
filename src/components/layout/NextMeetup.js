import React, { Component } from 'react';
import Meetup from './Meetup';
import Fetch from './Fetch'

class NextMeetup extends Component {
  state = {
    header: "Next Meetup",
    subheader: "Awesome meetup and event",
    date: "25 January 2019",
    index0: "Hello JavaScript & Node.js Ninjas",
    index1: "Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!",
    index2: "The meetup format will contain some short stories and technical talks.",
    index3: "If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.",
    index4: "Remember to bring a photo ID to get through building security.",
    index5: "-----",
    index6: "See you there!",
    index7: <Fetch />
  }
  render() {
    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">{this.state.header}</h5>
        <div className="next-meetup border p-3 m-3">
          <p className="font-weight-bold">{this.state.subheader}</p>
          <p className="text-black-50">{this.state.date}</p>
          <p>
            {this.state.index0}<br/>
            {this.state.index1}<br/>
            {this.state.index2}<br/>
            {this.state.index3}<br/>
            <br/>
            {this.state.index4}<br/>
            <br/>
            {this.state.index5}
            <br/>
            <br/>
            {this.state.index6}
            <br/>
            {this.state.index7}
          </p>
        </div>
      </div>
    );
  }
}

export default NextMeetup;
