import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const defaultCenter = { lat: 45.434479, lng: 12.334806 }

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={defaultCenter}
  >
    {props.markers && props.markers.filter(marker => marker.isVisible).map((marker, index) => {
        const locationDetails = props.locations.find(location => location.id === marker.id)
        return (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} onClick={() => props.handleMarkerClick(marker)} >
                {marker.showingInfoWindow && (
                    <InfoWindow>
                        <React.Fragment>
                            <h3>{locationDetails.name}</h3>
                            <p>{`Rating: ${locationDetails.rating}`}</p>
                            {locationDetails.price && 
                                <p>{`Price: ${locationDetails.price.tier}`}</p>
                            }
                        </React.Fragment>
                    </InfoWindow>
                )}
            </Marker>
        )    
    })}
  </GoogleMap>
))

class Map extends Component {
    render() {
        return(
            <MyMapComponent
                {...this.props /*get all props*/}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAdCskTxc3YDhwR56pWIWzBLMxHX8wgHkM"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: `75%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}

export default Map