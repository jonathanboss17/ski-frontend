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

  render() {
    return (
      <div className='App'>
        <Switch> 
          <Route exact path='/main' component={Main} />
          <Route exact path='/login' component={AuthForm} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/gear' component={Gear} />
          <Route exact path='/resorts' component={Resorts} />
        </Switch>
      </div>
    )
  }
}

