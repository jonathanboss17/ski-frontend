import React from 'react';
// import { MapInteractionCSS } from 'react-map-interaction';
import './App.css';
import ReactDOM from 'react-dom'

import Map from './Components/Map'; 

 
export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    )
  }
}

