import React, { Component } from 'react';

class Meetup extends Component {
  state = {
    header: "Hactiv8 Meetup",
    list: {
      index0: "Location",
      index1: "Members",
      index2: "Organizer(s)",
      index00: "Jakarta, Indonesia",
      index01: "1,078",
      index02: "Adhy Wiranata"
    }
  }
  render() {
    return (
      <div className="card meetup-card mb-4 mx-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img
              src="https://via.placeholder.com/180"
              className="card-img border"
              alt="placeholder-card"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body py-0">
              <h5 className="card-title font-weight-bold">{this.state.header}</h5>
              <div className="row mt-3">
                <div className="col-2 pr-0">
                  <p>{this.state.list.index0}</p>
                  <p>{this.state.list.index1}</p>
                  <p>{this.state.list.index2}</p>
                </div>
                <div className="col-4 pl-0">
                  <p>{this.state.list.index00}</p>
                  <p>{this.state.list.index01}</p>
                  <p>{this.state.list.index02}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "125px"}}
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meetup;
