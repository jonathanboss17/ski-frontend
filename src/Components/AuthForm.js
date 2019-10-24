import React from 'react'; 
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'; 

import { Link, Redirect, withRouter } from 'react-router-dom'; 

class AuthForm extends React.Component {

    state = {
        username: '', 
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({ user: this.state })
        }
    
        fetch('http://localhost:3000/login', reqObj)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('user_id', data.user.id)
            localStorage.setItem("jwt", data.jwt)
            this.props.history.push('/home')
        })
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' inverted textAlign='center'>Log-in to your account</Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder="username" name='username' value={this.state.username} onChange={this.handleChange} />
                            <Form.Input fluid icon='lock' iconPosition='left' type='password' placeholder="password" name='password' value={this.state.password} onChange={this.handleChange}/>
                            <Button color='blue' fluid size='large'>Login</Button>
                        
                        </Segment>
                    </Form>
            
                    <Message>
                        New to us? <Link to='/signup' exact='true'>Sign Up</Link>
                    </Message>

                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(AuthForm)