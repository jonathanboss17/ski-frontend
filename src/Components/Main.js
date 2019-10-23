import React from 'react';
import SearchBar from './SearchBar'; 

export default class Main extends React.Component {

    render(){
        return (
            <SearchBar getId={this.props.getId} resorts={this.props.resorts} />
        )
    }
}