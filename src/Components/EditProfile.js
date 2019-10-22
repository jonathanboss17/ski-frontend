import React from 'react'; 

import ImageUploader from './UserImageUploader'; 

import { Button, Modal, Form } from 'semantic-ui-react'

export default class EditProfile extends React.Component {

    state = {
        username: this.props.user.username, 
        bio: this.props.user.bio, 
        avatar: this.props.user.avatar, 
        password: this.props.user.password
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
            method: 'PATCH', 
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

        fetch(`http://localhost:3000/users/${localStorage.getItem('user_id')}`, reqObj)
        .then(response => response.json())
        .then(console.log)
    }

    render() {
        return (
            <Modal trigger={<Button basic color='black' size='tiny'>Edit Profile</Button>}>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Input width={6} label='Username' name='username' value={this.state.username} placeholder='jboss17' onChange={this.handleChange}/>
                            <ImageUploader getAvatar={this.getAvatar} />
                       
                            <Form.Input width={7} label='Password' name='password' value={this.state.password} placeholder='skierboi5000' onChange={this.handleChange}/>
                            
                            <Form.TextArea label='Bio' name='bio' value={this.state.bio} placeholder='Tell us more about you...' onChange={this.handleChange}/>
                            <Form.Button color='blue'>Update</Form.Button>
                </Form>
            </Modal>
        )
    }
}