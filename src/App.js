import React from 'react';
// import { MapInteractionCSS } from 'react-map-interaction';
import './App.css';
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

