import React from 'react';
import SearchBar from './SearchBar'; 

import NavBar from './NavBar'; 


export default class Main extends React.Component {

    render(){
        return (
            <div>
                <NavBar 
                // clearUser={this.props.clearUser}
                />
                <SearchBar handleSearchChange={this.props.handleSearchChange} handleSearchSubmit={this.props.handleSearchSubmit} redirect={this.props.redirect}/>
            </div> 
        )
    }
}