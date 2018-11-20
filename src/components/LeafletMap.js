import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { Button } from 'react-bootstrap';

class LeafletMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: this.props.zoom,
            position: [this.props.lat, this.props.lng]
        }

    }

    componentWillUpdate(nextProps) {
        if (nextProps.lat !== this.state.position[0] || nextProps.lng !== this.state.position[1]) {
            this.setState({
                ...this.state,
                zoom: nextProps.zoom,
                position: [nextProps.lat, nextProps.lng]
            })
        }
    }

    render() {
        return(
            <Map className="map" center={this.state.position} zoom={this.state.zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                <Marker position={this.state.position} />
            </Map>
        )
    }
}

export default LeafletMap;