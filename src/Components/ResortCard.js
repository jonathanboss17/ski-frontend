import React from 'react'; 

import { Card, Grid } from 'semantic-ui-react'; 
// look up dimmers later to spice things up
// lets do a modal for the show page
// ski area id corresponds to resort show page ... have to do a different fetch for that

export default class ResortCard extends React.Component {
    // temp_country: 184 ... all resorts in the US

    renderUSResorts = () => {

            // const x = this.props.resorts.slice(0, 4)
            // put this in a higher order component
            // like the sushi lab
        
        return this.props.resorts.map(y => {
            return (
                <Grid.Row>
                    <Grid.Column>
                        <Card>
                            <Card.Content>
                                <Card.Header>{y.SkiArea.name}</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            )
        })
   
    }

    render() {
        return (
            <Grid textAlign='center' container relaxed='very' columns={4} >
                {this.props.resorts.length > 0 ? this.renderUSResorts() : null}
            </Grid>
        )
    }
}
