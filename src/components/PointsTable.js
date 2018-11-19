import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import 'proj4';
import 'proj4leaflet';
import L from 'leaflet';

import ZoomButton from './ZoomButton';

// CUSTOM CRS FOR LEAFLET PROJECTION
let crs = new L.Proj.CRS("EPSG:26912",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
    {
        origin: [673560.08, 4526299.91],
        resolutions: [45200, 22600, 11300, 5650, 2825, 1412.5, 706.25, 353.125, 176.5625, 88.28125, 44.140625],
        tileSize: 256,
        bounds: [673560.08, 4526299.91]
    });
class PointsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            points: []
        }
    }

    // SUBSCRIBE TO DATA OBSERVABLE TO PULL LAT/LNG FOR MAP ZOOM
    componentWillMount() {
        this.props.data$.subscribe((data) => {
            // CONVERT EPSG:26912 TO LAT/LNG
            let navData = data.points.map((x) => {
                let point = L.point(x.lat, x.lon)
                return crs.projection.unproject(point);
            })
            this.setState({
                ...this.state,
                points: [...navData]
            })
        })
    }

    render() {
        return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitute</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.points.map((point, i) => (
                        <tr key={i}>
                            <th>{ <ZoomButton key={i} /> }</th>
                            <th>{point.label}</th>
                            <th>{point.lat.toFixed(3)}</th>
                            <th>{point.lng.toFixed(3)}</th>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default PointsTable;