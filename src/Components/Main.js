import React from 'react';
import NavBar from './NavBar'; 
import SearchBar from './SearchBar'; 


export default class Main extends React.Component {
    render(){
        return (
            <div>
                <NavBar />
                <SearchBar handleSearchChange={this.props.handleSearchChange} handleSearchSubmit={this.props.handleSearchSubmit} redirect={this.props.redirect}/>
            </div> 
        )
    }
}