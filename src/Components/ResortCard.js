import React from 'react'; 

import { Card, Grid } from 'semantic-ui-react'; 
// look up dimmers later to spice things up
// lets do a modal for the show page
// ski area id corresponds to resort show page ... have to do a different fetch for that

export default class ResortCard extends React.Component {
    // temp_country: 184 ... all resorts in the US

    state ={
        loaded: false
    }

    isLoaded = () => {
        if(this.props.resorts.length > 0){
            this.setState({ loaded: true })
        }
    }

    renderUSResorts = () => {
        for(let i = 0; i < 5; i++){
            return (
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Jackson Hole</Card.Header>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        }
   
    }

    render() {

        const x = this.props.resorts.slice(0, 4)
        x.map(y => {
            return (
                'hi'
            )
        })
        return (
            <Grid.Row>
                {this.renderUSResorts()}
            </Grid.Row>
        )
    }
}
