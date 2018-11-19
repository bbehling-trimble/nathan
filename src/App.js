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
  render() {
    return (
      <Grid className="container">
        <Row>
          <Col xs={12} md={7}>
            <LeafletMap />
          </Col>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={4}>
            <PointsTable data$={data$} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
