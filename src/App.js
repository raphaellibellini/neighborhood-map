import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import * as FoursquareAPI from './helper/FoursquareAPI'

class App extends Component {
  state = {
    locations: []
  }

  componentDidMount() {
    FoursquareAPI.getAllLocations()
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
