import React, { Component } from 'react';
import './App.css';
import Stream from "./stream/view";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stream/>
      </div>
    );
  }
}

export default App;
