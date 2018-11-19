import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import ZoomButton from './ZoomButton';

class PointsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                    { this.state.points.map((point) => (
                        <tr>
                            <th>{ <ZoomButton /> }</th>
                            <th>{point.label}</th>
                            <th>{point.lat}</th>
                            <th>{point.lon}</th>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default PointsTable;