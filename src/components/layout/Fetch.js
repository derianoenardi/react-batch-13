import React, { Component } from 'react';
import axios from 'axios';

class Fetch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        people: []
      };
    }
    componentDidMount() {
      axios
        .get("https://swapi.co/api/people")
        .then(response => this.setState({ people: response.data.results }));
    }
    render() {
        console.log(this.state.people)
        const {classes} = this.props
        const {people} = this.state
        let filteredByMass = people.length != 0 ?
people.filter(data => {
    return data.mass > 70
})
:
[]

      return (
        <div>
          <ul>{this.state.people.map(p => <li key = {p.name}>{p.name}</li>)}</ul>
          {filteredByMass.length !=0 ?
          filteredByMass.map(result => {
              return(
                  <React.Fragment key={result.name}>
                  <li>{result.name}</li>
                  </React.Fragment>
              )
          })
          :
          <h1>LOADING</h1>}
        </div>
      );
    }
  }

export default Fetch;