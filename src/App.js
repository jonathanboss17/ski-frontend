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
import SignUpForm from './Components/SignUpForm'; 
import NavBar from './Components/NavBar'; 
import Post from './Components/Post'; 
import Users from './Components/Users';
import SearchedUsersShowPage from './Components/SearchedUsersShowPage'; 

import './Styling/App.css';
 
export default class App extends React.Component {

  state = {
    us_resorts: [],
    filtered_resorts: [],
    input: null,
    search_redirect: false, 
    ski_area_id: null,
    user: null, 
    searched_user: null
  }

  componentDidMount() {
    const reqObj = {
      headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'Authorization': localStorage.getItem('jwt')
      }
    }

    Promise.all([
      fetch('http://localhost:3000/resorts'), 
      fetch('http://localhost:3000/profile', reqObj)
    ])
    .then((results) => Promise.all(results.map(r => r.json())))
    .then(data => {
      this.setState({ user: data[1] })
      this.setState({ us_resorts: this.getUSResorts(data[0])})
    })
  }

  getUSResorts = (data) => {
    return data.filter(resort => resort.country_id === '184')
  }

  setSearchedUser = (username) => {
    this.setState({ searched_user: username})
  }

  //  ----- LOG OUT USER -------

  clearUser = () => {
    this.setState({ user: null})
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

  render() {
    return (
      <div className='App'>
        <Switch> 
          <Route exact path='/' render={() => <Main
          //  clearUser={this.clearUser}
            handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} redirect={this.searchRedirect} />} />
          <Route exact path='/login' component={AuthForm} />
          <Route exact path='/profile' render={() => <Profile user={this.state.user}/>} />
          <Route exact path='/gear' render={() => <Gear />} />
          <Route exact path='/resorts' render={() => <Resorts resorts={this.state.us_resorts} />} />
          <Route exact path='/resort/show' render={() => <ResortShowPage ski_area_id={this.state.ski_area_id}/>} />
          <Route exact path='/signup' component={SignUpForm} />
          <Route exact path='/post' component={Post} />
          <Route exact path='/users' render={() => <Users setSearchedUser={this.setSearchedUser} />} />
          <Route exact path='/searchedusersshow' component={SearchedUsersShowPage}/>
        </Switch>
      </div>
    )
  }
}

