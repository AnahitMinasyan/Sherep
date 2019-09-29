import React, {Component} from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import classes from './MapContainer.css';
class MapContainer extends Component {



    render() {
        return (


        <Map  className={classes.Map}
            google={this.props.google}
            zoom={10}
            initialCenter={{
                lat: 40.1783454,
                lng: 44.5095773
            }}
            >
            <Marker />
        </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDDvHsRVuc0Dozpsfvi84kpdK6UVg1zs9k"
})(MapContainer);
