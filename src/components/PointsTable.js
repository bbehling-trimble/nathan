import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import 'proj4';
import 'proj4leaflet';
import L from 'leaflet';

import ZoomButton from './ZoomButton';

// CUSTOM CRS FOR LEAFLET PROJECTION
let crs = new L.Proj.CRS("EPSG:26912", "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
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
                point = crs.projection.unproject(point);
                point.label = x.label
                return point
            })
            this.setState({
                ...this.state,
                points: [...navData]
            })
        })
    }

    render() {
        return (
            <Table className={this.props.tableOnMap ? "table-map" : null } striped bordered>
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
                            <th>{ <ZoomButton navigate={this.props.navigate} point={point} key={i} /> }</th>
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