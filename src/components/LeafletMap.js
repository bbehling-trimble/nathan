import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';

class LeafletMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: this.props.zoom,
            position: [this.props.lat, this.props.lng]
        }
    }

    componentWillUpdate(nextProps) {
        console.log('Hello: ', nextProps)
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
            <Map center={this.state.position} zoom={this.state.zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            </Map>
        )
    }
}

export default LeafletMap;