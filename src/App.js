import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import * as FoursquareAPI from './helper/FoursquareAPI'
import Sidebar from './components/Sidebar';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  state = {
    locations: [],
    markers: []
  }

  /*
   *when an item in the list is clicked, 
   *it gets the marker corresponding to the location of that item and 
   *calls the "handleMarkerClick" to open the Window.
   */
  handleListItemClick = (location) => {
    const marker = this.state.markers.find(marker => location.id === marker.id)
    this.handleMarkerClick(marker)
  }

  handleMarkerClick = (marker) => {
    this.closeAllInfoWindows()
    /*
     *when the marker is clicked
     *set the property "showingInfoWindow" of this marker to true and
     *adds this marker to the markers array. 
     */
    marker.showingInfoWindow = true
    this.setState({ markers: Object.assign(this.state.markers, marker )}) 

    //get the location of the marker that was clicked
    const location = this.state.locations.find(location => location.id === marker.id)
    //get the location details through the marker that was clicked
    FoursquareAPI.getVenueDetails(marker.id)
    .then(res => {
      //add the details to the location
      const detailedLocation = Object.assign(location, res)

      //add this detailed location to the locations array
      this.setState({ locations: Object.assign(this.state.locations, detailedLocation )})
      console.log(detailedLocation)
    })
  }

  closeAllInfoWindows = () => {
    const markers = this.state.markers.map(marker => {
      marker.showingInfoWindow = false
      return marker
    })
    this.setState({ markers: Object.assign(this.state.markers, markers)})
  }

  componentDidMount() {
    FoursquareAPI.searchLocations('restaurant')
    .then(res => {
      const locations = res
      const markers = locations.map(location => {
        return {
          lat: location.location.lat,
          lng: location.location.lng,
          showingInfoWindow: false, 
          isVisible: true,
          id: location.id
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
        <Header />
        <Sidebar {...this.state} handleListItemClick={this.handleListItemClick} />
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick} /> {/*pass the whole state and some methods*/}
        <Footer />
      </div>
    );
  }
}

export default App;
