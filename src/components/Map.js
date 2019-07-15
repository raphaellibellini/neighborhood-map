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
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} onClick={() => props.handleMarkerClick(marker)}
            animation={marker.showingInfoWindow && window.google.maps.Animation.BOUNCE} 
            icon={marker.showingInfoWindow === true ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png": 
            "http://maps.google.com/mapfiles/ms/icons/red-dot.png"} >
                {marker.showingInfoWindow && (
                    <InfoWindow onCloseClick={() => props.closeAllInfoWindows()}>
                        <React.Fragment>
                            <h2 className='info-window-title'>{locationDetails.name}</h2>
                            <p className='info-window'>{locationDetails.location.address}</p>
                            {(locationDetails.categories && locationDetails.categories.length != 0)  &&
                                <p className='info-window'>{locationDetails.categories[0].name}</p>
                            }
                            <p className='info-window'>{`Rating: ${locationDetails.rating}`}</p>
                            {locationDetails.hours && 
                                <p className='info-window'>{locationDetails.hours.isOpen}</p>
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
                className='map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAdCskTxc3YDhwR56pWIWzBLMxHX8wgHkM"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `55%`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}

export default Map