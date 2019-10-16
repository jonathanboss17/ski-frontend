import React from 'react'; 
import NavBar from './NavBar'; 
import ResortCard from './ResortCard'; 
import { Header } from 'semantic-ui-react'; 

export default class Resorts extends React.Component {

    render(){
        return (
            <div id='resorts'>
                <NavBar />
                <Header inverted as='h1'>Resorts Page</Header>
                
                <ResortCard resorts={this.props.resorts} />
                
            </div>
        )
    }
}