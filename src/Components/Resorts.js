import React from 'react'; 
import NavBar from './NavBar'; 
import ResortCard from './ResortCard'; 
import { Card } from 'semantic-ui-react'; 

export default class Resorts extends React.Component {
    render(){
        return (
            <div id='resorts'>
                <NavBar />
                Resorts Page
                <Card.Group itemsPerRow={4}  >
                    <ResortCard />
                </Card.Group>
            </div>
        )
    }
}