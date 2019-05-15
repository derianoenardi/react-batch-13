import React, { Component } from 'react';

class Past extends Component {
  state = {
    header: "Past Meetups",
    seeall: "See all",
    date: "27 November 2017",
    event: "#39 JakartaJS April Meetup with Kumparan",
    people: "139",
    went: "went",
    button: "View"
  }
  render() {
    return (
      <div className="mx-3">
        <div className="row justify-content-between">
          <h5 className="col font-weight-bold">{this.state.header}</h5>
          <h5 className="col text-right mr-3">{this.state.seeall}</h5>
        </div>
        <div className="row m-3">
          <div className="card past-card col rounded-0 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{this.state.date}</h5>
              <p className="card-text">{this.state.event}</p>
              <p className="card-text">{this.state.people}<span className="text-black-50">{this.state.went}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                {this.state.button}
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{this.state.date}</h5>
              <p className="card-text">{this.state.event}</p>
              <p className="card-text">{this.state.people}<span className="text-black-50">{this.state.went}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                View
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{this.state.date}</h5>
              <p className="card-text">{this.state.event}</p>
              <p className="card-text">{this.state.people}<span className="text-black-50">{this.state.went}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Past;
