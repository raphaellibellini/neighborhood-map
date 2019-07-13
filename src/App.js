import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import * as FoursquareAPI from './helper/FoursquareAPI'

class App extends Component {
  state = {
    locations: [],
    markers: []
  }

  /*
   *when the marker is clicked
   *set the property "showingInfoWindow" of this marker to true and
   *adds this marker to the markers array. 
  */ 
  handleMarkerClick = (marker) => {
    this.closeAllInfoWindows()
    marker.showingInfoWindow = true
    this.setState({ markers: Object.assign(this.state.markers, marker )}) 
  }

  closeAllInfoWindows = () => {
    const markers = this.state.markers.map(marker => {
      marker.showingInfoWindow = false
      return marker
    })
    this.setState({ markers: Object.assign(this.state.markers, markers)})
  }

  componentDidMount() {
    FoursquareAPI.getAllLocations()
    .then(res => {
      const locations = res
      const markers = locations.map(location => {
        return {
          lat: location.location.lat,
          lng: location.location.lng,
          showingInfoWindow: false, 
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
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick} /> {/*pass the whole state and some methods*/}
      </div>
    );
  }
}

export default App;
