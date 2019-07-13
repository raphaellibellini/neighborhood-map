import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const defaultCenter = { lat: 45.434479, lng: 12.334806 }

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={defaultCenter}
  >
    {props.markers && props.markers.filter(marker => marker.isVisible).map((marker, index) => (
        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} onClick={() => props.handleMarkerClick(marker)} >
            {marker.showingInfoWindow && (
                <InfoWindow>
                    <p>Testing</p>
                </InfoWindow>
            )}
        </Marker>
    ))} 
  </GoogleMap>
))

class Map extends Component {
    render() {
        return(
            <MyMapComponent
                {...this.props /*get all props*/}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAdCskTxc3YDhwR56pWIWzBLMxHX8wgHkM"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}

export default Map