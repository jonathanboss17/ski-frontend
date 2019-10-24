import React from 'react'; 

import { Grid, Form, Header, Segment } from 'semantic-ui-react'; 
import { withRouter } from 'react-router-dom'; 
import UserImageUploader from './UserImageUploader'; 

class SignUpForm extends React.Component {
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
        .then(user => {
            localStorage.setItem('user_id', user.id)
            this.props.history.push('/home')
        })
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Segment>
                        <Segment>
                            <Header as='h2' color='black' textAlign='center'>Sign Up</Header>
                        </Segment>
                        <br></br>
                        <UserImageUploader getAvatar={this.getAvatar} />
                        <br></br>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input label='Username' name='username' value={this.state.username} placeholder='jboss17' onChange={this.handleChange}/>
                                <Form.Input label='Password' name='password' value={this.state.password} placeholder='skierboi5000' onChange={this.handleChange}/> 
                            </Form.Group>
                            <br></br>
                            <Form.TextArea label='Bio' name='bio' value={this.state.bio} placeholder='Tell us more about you...' onChange={this.handleChange}/>
                            <br></br>
                            <Form.Button color='blue'>Submit</Form.Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(SignUpForm)