import React from 'react'; 

import NavBar from './NavBar'; 
import PostImageUploader from './PostImageUploader'; 

import { Header, Form, Grid, Segment } from 'semantic-ui-react'; 

export default class Post extends React.Component {

    state = {
        caption: '', 
        img: null
    }

    getPostImg = (url) => {
        this.setState({ img: url })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        const reqObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ user_id: localStorage.getItem('user_id'), caption: this.state.caption, img: this.state.img })
        }

        fetch('http://localhost:3000/posts', reqObj)
    }
    
    render() {
        return (
            <div>
                <NavBar />
                <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Segment>
                        <Header as="h2">Create A Post!</Header>
                            <Form onSubmit={this.handleSubmit}>
                                <PostImageUploader getPostImg={this.getPostImg}/>
                                <br></br>
                                <br></br>
                                <Form.Input placeholder='caption' name='caption' value={this.state.caption} onChange={this.handleChange}/>
                                <Form.Button color="blue">Create</Form.Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}