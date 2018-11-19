import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

class LeafletMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '38.970',
            lng: '-104.717',
            zoom: 8,
            points: []
        }
    }

    componentWillMount() {
        this.props.data$.subscribe((data) => {
            this.setState({
                ...this.state,
                points: [...data.points]
            })
        })
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return(
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            </Map>
        )
    }
}

export default LeafletMap;