import React from 'react'; 
import { Grid, Header, Form } from 'semantic-ui-react'; 
// import a Redirect upon submission of Form

export default class SearchBar extends React.Component {
    // don't forget to add validations
    // the first id in the ski maps array is the most recent / current map
    // for the search bar create a system where it eliminates options based off what's typed in ... like pokemon lab

    render() { 
        return (
            <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form onSubmit={this.props.handleSearchSubmit}>
                        <Header as='h1'>
                            <Form.Input transparent size='massive' placeholder='State' onChange={this.props.handleSearchChange} />
                            {/* look at show no results */}
                        </Header>
                    </Form>
                    {this.props.redirect()}
                </Grid.Column>
            </Grid>
        )
    }
}