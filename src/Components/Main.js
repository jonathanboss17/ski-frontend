import React from 'react';
import SearchBar from './SearchBar'; 

export default class Main extends React.Component {

    render(){
        return (
            <SearchBar handleSearchChange={this.props.handleSearchChange} handleSearchSubmit={this.props.handleSearchSubmit} redirect={this.props.redirect}/>
        )
    }
}