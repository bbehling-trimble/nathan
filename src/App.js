import React, { Component } from 'react';
import { Observable } from 'rxjs';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './App.css';
import LeafletMap from './components/LeafletMap';
import PointsTable from './components/PointsTable';

// FILE PULLED FROM BASIC EXPRESS SERVER TO DEAL WITH CORS ISSUE
const url = 'https://mrburgo-trimble-express.herokuapp.com/points';

// CREATE OBSERVABLE TO MAKE HTTP REQUEST FOR MAP POINTS
const data$ = Observable.create((observer) => {
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then((data) => {
    observer.next(data);
    observer.complete();
  })
  .catch(err => observer.error(err));
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 38.970,
      lng: -104.717,
      zoom: 8,
      tableOnMap: true
    };
    
    this.navigate = this.navigate.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
  }

  navigate(lat, lng) {
    this.setState({
      lat,
      lng,
      zoom: 11
    })
  }

  toggleLocation() {
    this.setState({
      ...this.state,
      tableOnMap: !this.state.tableOnMap
    })
  }

  render() {
    return (
      <Grid className="container">
        <Row>
          <Col xs={0} md={1}></Col>
          { this.state.tableOnMap ? 
          <Col xs={12} md={10}>
            <PointsTable tableOnMap={this.state.tableOnMap} data$={data$} navigate={this.navigate} />
            <Button onClick={this.toggleLocation} bsStyle="info" className="map-button">Toggle Table Location</Button>
            <LeafletMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} />
          </Col> : 
          <Col xs={12} md={6}>
            <Button onClick={this.toggleLocation} bsStyle="info" className="map-button">Toggle Table Location</Button>
            <LeafletMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} />
          </Col>}
          { !this.state.tableOnMap ? 
          <Col xs={12} md={4}>
            <PointsTable tableOnMap={this.state.tableOnMap} data$={data$} navigate={this.navigate} />
          </Col> : null
          }
          <Col xs={0} md={1}></Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
