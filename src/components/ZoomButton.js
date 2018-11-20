import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ZoomButton extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.navigate(this.props.point.lat, this.props.point.lng);
    }

    render() {
        return (
            <Button onClick={this.onClick} bsStyle="info">View</Button>
        )
    }
}

export default ZoomButton