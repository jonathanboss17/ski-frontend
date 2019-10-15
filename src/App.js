import React from 'react';
// import { MapInteractionCSS } from 'react-map-interaction';

import { Switch, Route } from 'react-router-dom'; 

// import Map from './Components/Map';
import AuthForm from './Components/AuthForm';  
import Profile from './Components/Profile'; 
import Main from './Components/Main'; 
import Gear from './Components/Gear'; 
import Resorts from './Components/Resorts'; 

import './Styling/App.css';
 
export default class App extends React.Component {

  state = {
    us_resorts: []
  }

  componentDidMount() {
    fetch('https://skimap.org/SkiAreas/index.json')
    .then(response => response.json())
    .then(data => {
        this.setState({ us_resorts: this.getUSResorts(data) })
    })
  }

  getUSResorts = (data) => {
    return data.filter(resort => resort.Region[0] !== undefined ? resort.Region[0].RegionsSkiArea.temp_country === '184' : null)
  }

  render() {
    return (
      <div className='App'>
        <Switch> 
          <Route exact path='/main' component={Main} />
          <Route exact path='/login' component={AuthForm} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/gear' component={Gear} />
          <Route exact path='/resorts' render={() => <Resorts resorts={this.state.us_resorts} />} />
        </Switch>
      </div>
    )
  }
}

