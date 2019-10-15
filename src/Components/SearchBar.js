import React from 'react'; 
import { Grid, Header, Form } from 'semantic-ui-react'; 
// import a Redirect upon submission of Form

export default class SearchBar extends React.Component {
    // don't forget to add validations
    // the first id in the ski maps array is the most recent / current map
    // for the search bar create a system where it eliminates options based off what's typed in ... like pokemon lab
    state = {
        input: null
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    handleSubmit = () => {
        console.log('submitted')
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <Header as='h1'>
                            <Form.Input transparent size='massive' placeholder='Search Your Resort' onChange={this.handleChange} />
                        </Header>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}