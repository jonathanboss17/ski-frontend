import React from 'react'; 

import { Grid, Form, Header, Segment } from 'semantic-ui-react'; 

import ImageUploader from './UserImageUploader'; 

export default class SignUpForm extends React.Component {
    // have to upload image first
    // cloudinary triggers fetch request for some reason
    state = {
        avatar: '', 
        username: '', 
        password: '', 
        bio: ''
    }

    getAvatar = (url) => {
        this.setState({ avatar: url })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        const reqObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                user: {
                    username: this.state.username, 
                    password: this.state.password,
                    bio: this.state.bio,
                    avatar: this.state.avatar
                }
            })
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(response => response.json())
        .then(console.log)
    }

    render() {

        return (
            <Grid textAlign='center' style={{ height: '95vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Segment>
                        <Header as='h2' color='blue' textAlign='center'>Create Your Account</Header>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Input width={6} label='Username' name='username' value={this.state.username} placeholder='jboss17' onChange={this.handleChange}/>
                            <ImageUploader getAvatar={this.getAvatar} />
                       
                            <Form.Input width={7} label='Password' name='password' value={this.state.password} placeholder='skierboi5000' onChange={this.handleChange}/>
                            
                            <Form.TextArea label='Bio' name='bio' value={this.state.bio} placeholder='Tell us more about you...' onChange={this.handleChange}/>

                            <Form.Checkbox label='I agree to the Terms and Conditions' />
                            <Form.Button color='blue'>Submit</Form.Button>
                        </Form>

                    </Segment>

                </Grid.Column>
            </Grid>
        )
    }
}