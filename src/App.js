import React, { Component } from 'react';
// import { Provider } from 'react-redux';

import './App.css';
import store from './store.js';
import LeafletMap from './components/LeafletMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeafletMap />
      </div>
    );
  }
}

export default App;
