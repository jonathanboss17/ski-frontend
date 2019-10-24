import React from 'react';
import GearCard from './GearCard'; 

import { Grid, Card, Header, Container, Image } from 'semantic-ui-react'; 

export default class Gear extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => {
            if(this.props){
                this.props.user.following.forEach(x => {
                    let z = data.filter(y => y.user.username === x.username)
                    this.setState({ posts: [...this.state.posts, z].flat()})
                })
            }
        })
    }

    renderCards = () => {
        return this.state.posts.map(post => {
            return (
                <GearCard post={post} user={this.props.user}/>
            )
        })
    }

    renderError = () => {
        return (
            <Grid containter textAlign='center'>
                <Header as='h1' fluid centered>
                    <Image src="https://cdn4.iconfinder.com/data/icons/emoticons-outline/512/21-512.png" />
                    You Don't Follow Anyone
                </Header>
            </Grid>
        )
    }

    render(){
        return (
            <div id="gear">
                <br></br>
                <br></br>
                <br></br>
                {this.state.posts.length < 1 ? this.renderError() : null}
                <Grid centered container columns='equal'>
                    <Grid.Column width={8}>
                        <Card.Group>
                            {this.state.posts.length > 0 ? this.renderCards() : null }
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}