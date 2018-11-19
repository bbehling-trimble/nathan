import React, { Component } from 'react';
import { Observable } from 'rxjs';
import { Grid, Row } from 'react-bootstrap';

import './App.css';
import LeafletMap from './components/LeafletMap';

// FILE PULLED FROM BASIC EXPRESS SERVER TO DEAL WITH CORS ISSUE
const url = 'https://mrburgo-trimble-express.herokuapp.com/points';

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
      <Grid>
        <Row xs={12} md={6} lg={4}>
          <LeafletMap data$={data$} />
        </Row>
      </Grid>
    );
  }
}

export default App;
