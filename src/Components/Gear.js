import React from 'react';
import GearCard from './GearCard'; 

import { Grid, Card, Header } from 'semantic-ui-react'; 

import NavBar from './NavBar'; 

export default class Gear extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => {
            this.setState({ posts: data })
        })
    }

    renderCards = () => {
        return this.state.posts.map(post => {
            return (
                <GearCard post={post} user={this.props.user}/>
            )
        })
    }

    render(){
        return (
            <div id="gear"> 
                <NavBar />
                <Header as='h2'inverted>Gear Feed</Header>
                <br></br>
                <Grid centered container columns='equal'>
                    <Grid.Column width={8}>
                        <Card.Group>
                            {this.state.posts.length > 0 ? this.renderCards() : null}
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}