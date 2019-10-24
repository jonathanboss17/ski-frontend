import React from 'react';
// import { MapInteractionCSS } from 'react-map-interaction';

import { Switch, Route } from 'react-router-dom'; 

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
    resorts: [],
    filtered_resorts: [],
    input: null,
    ski_area_id: null,
    user: null, 
    searched_user_id: null, 
    search_resort: {
      title: '', 
      description: ''
    }, 
    search_resorts: []
  }

  componentDidMount() {
    let token = localStorage.getItem('user_id')

    if(token){
      Promise.all([
        fetch('http://localhost:3000/resorts'), 
        fetch(`http://localhost:3000/users/${token}`)
      ])
      .then((results) => Promise.all(results.map(r => r.json())))
      .then(data => {
        this.setState({ user: data[1] })
        this.setState({ resorts: data[0] })

        this.state.resorts.forEach(resort => {
            this.setSearchedResorts(this.setSearchedResort(resort))
        })

      })
    }
  }

  setSearchedResort = (resort) => {
    this.setState({ 
      search_resort: {
        ...this.state.search_resort, 
        title: resort.resort_name, 
        description: resort.region_name, 
        id: resort.area_id
      }
    })
    return this.state.search_resort
  }

  setSearchedResorts = (resort) => {
      this.setState({ search_resorts: [...this.state.search_resorts, resort] })
  }

  getSearchedUserId = (id) => {
    this.setState({ searched_user_id: id})
  }

  //  ----- LOG OUT USER -------

  clearUser = () => {
    this.setState({ user: null})
  }

  //-----SEARCH BAR-------

  getSkiAreaId = (value) => {
    this.setState({ ski_area_id: value})
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <br></br>
        <Switch> 
          <Route exact path='/home' render={() => <Main getId={this.getSkiAreaId} resorts={this.state.search_resorts}/>} />
          <Route exact path='/login' component={AuthForm} />
          <Route exact path='/profile' render={() => <Profile user={this.state.user}/>} />
          <Route exact path='/gear' render={() => <Gear user={this.state.user} />} />
          {/* <Route exact path='/resorts' render={() => <Resorts resorts={this.state.resorts} />} /> */}
          <Route exact path='/resort/show' render={() => <ResortShowPage ski_area_id={this.state.ski_area_id}/>} />
          <Route exact path='/signup' component={SignUpForm} />
          <Route exact path='/post' render={() => <Post user={this.state.user} />} />
          <Route exact path='/users' render={() => <Users getSearchedUserId={this.getSearchedUserId} />} />
          <Route exact path='/searchedusersshow' render={() => <SearchedUsersShowPage id={this.state.searched_user_id} /> } />
        </Switch>
      </div>
    )
  }
}

