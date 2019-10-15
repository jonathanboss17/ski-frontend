import React from 'react'; 
import NavBar from './NavBar'; 
import ResortCard from './ResortCard'; 
import { Header, Grid } from 'semantic-ui-react'; 

export default class Resorts extends React.Component {

    render(){
        return (
            <div id='resorts'>
                <NavBar />
                <Header inverted as='h1'>Resorts Page</Header>
                <Grid textAlign='center' container relaxed='very' columns={4} >
                    <ResortCard resorts={this.props.resorts} />
                </Grid>
            </div>
        )
    }
}