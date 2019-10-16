import React from 'react';
// import { MapInteractionCSS } from 'react-map-interaction';

import { Switch, Route, Redirect } from 'react-router-dom'; 

// import Map from './Components/Map';
import AuthForm from './Components/AuthForm';  
import Profile from './Components/Profile'; 
import Main from './Components/Main'; 
import Gear from './Components/Gear'; 
import Resorts from './Components/Resorts'; 
import ResortShowPage from './Components/ResortShowPage'; 

import './Styling/App.css';
 
export default class App extends React.Component {

  state = {
    us_resorts: [],
    filtered_resorts: [],
    input: null,
    search_redirect: false, 
    ski_area_id: null, 
    ski_map_id: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/resorts')
    .then(response => response.json())
    .then(data => {
        this.setState({ us_resorts: this.getUSResorts(data) })
    })
  }

  getUSResorts = (data) => {
    return data.filter(resort => resort.country_id === '184')
  }

  //-----SEARCH BAR-------

  handleSearchChange = (e) => {
    this.setState({ input: e.target.value })
    let x = this.state.us_resorts.filter(resort => resort.resort_name.includes(this.state.input))
    this.setState({filtered_resorts: x})
  }

  handleSearchSubmit = (e) => {
    e.preventDefault(); 
    this.setState({search_redirect: true})
    this.setState({ ski_area_id: this.state.filtered_resorts[0].area_id })
  }

  searchRedirect = () => {
    if(this.state.search_redirect){
      this.setState({search_redirect: false})
      return <Redirect to='/resort/show' />
      // redirects fine ... but NavBar disappears ... don't know how to address just yet
    }

  }
  // time delay when searching

  // ----------RESORT SHOW PAGE-------------

  // use Promise.all in componentDidMount to send multiple fetch requests
  // ---------------------



  render() {
    console.log(this.state.filtered_resorts)
    return (
      <div className='App'>
        <Switch> 
          <Route exact path='/main' render={() => <Main handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} redirect={this.searchRedirect} />} />
          <Route exact path='/login' component={AuthForm} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/gear' component={Gear} />
          <Route exact path='/resorts' render={() => <Resorts resorts={this.state.us_resorts} />} />
    <Route exact path='/resort/show' render={() => <ResortShowPage ski_area_id={this.state.ski_area_id}/>} />
        </Switch>
      </div>
    )
  }
}

