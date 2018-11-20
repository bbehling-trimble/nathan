import React, { Component } from 'react';
import { Observable } from 'rxjs';
import { Grid, Row, Col } from 'react-bootstrap';

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
      zoom: 8
    };
    
    this.navigate = this.navigate.bind(this);
  }

  navigate(lat, lng) {
    console.log(lat, lng)
    this.setState({
      lat,
      lng,
      zoom: 11
    })
  }

  render() {
    return (
      <Grid className="container">
        <Row>
          <Col xs={12} md={7}>
            <LeafletMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} />
          </Col>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={4}>
            <PointsTable data$={data$} navigate={this.navigate} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
