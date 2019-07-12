import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import * as FoursquareAPI from './helper/FoursquareAPI'

class App extends Component {
  state = {
    locations: [],
    markers: []
  }

  componentDidMount() {
    FoursquareAPI.getAllLocations()
    .then(res => {
      const locations = res
      const markers = locations.map(location => {
        return {
          lat: location.location.lat,
          lng: location.location.lng,
          isOpen: false,
          isVisible: true
        }
      })
      this.setState({ locations, markers })
      console.log("Locations")
      console.log(this.state.locations)
      console.log("Markers")
      console.log(this.state.markers)
    })
  }

  render() {
    return (
      <div className="App">
        <Map {...this.state} /> {/*pass the whole state*/}
      </div>
    );
  }
}

export default App;
