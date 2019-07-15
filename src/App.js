import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import * as FoursquareAPI from './helper/FoursquareAPI'
import ContainerInfo from './components/ContainerInfo';
import Header from './components/Header'

class App extends Component {
  state = {
    locations: [],
    markers: [],
    query: ''
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

  getAllLocations = () => {
    FoursquareAPI.getAllLocations()
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

  componentDidMount() {
    this.getAllLocations()
  }

  updateQuery = (query) => {
		this.setState ({query: query})
    this.searchLocations(query)
  }

  searchLocations = (query) => {
    if(query) {
      FoursquareAPI.searchLocations(query)
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
        })
    } else {
      this.getAllLocations()
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick} closeAllInfoWindows={this.closeAllInfoWindows}/> {/*pass the whole state and some methods*/}
        <ContainerInfo {...this.state} handleListItemClick={this.handleListItemClick} updateQuery={this.updateQuery} />
      </div>
    );
  }
}

export default App;
