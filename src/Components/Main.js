import React from 'react';
import SearchBar from './SearchBar'; 

export default class Main extends React.Component {

    render(){
        return (
            <div id='main'>
                <SearchBar getId={this.props.getId} resorts={this.props.resorts} />
            </div>
        )
    }
}