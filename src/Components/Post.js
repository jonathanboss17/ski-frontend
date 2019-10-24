import React from 'react'; 

import PostImageUploader from './PostImageUploader'; 

import { Header, Form, Grid, Segment, Card, Image, List, Icon, Input } from 'semantic-ui-react'; 

import { withRouter } from 'react-router-dom'; 

class Post extends React.Component {

    state = {
        caption: '', 
        img: null
    }

    getPostImg = (url) => {
        this.setState({ img: url })
    }

    handleChange = (e) => {
        this.setState({ caption: e.target.value })
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
        .then(() => {
            this.props.history.push('/profile')
        })
    }

    
    render() {

        const header  = (
            <a>
                <Icon size='large' color='black' name='heart outline' />
                <Icon size='large' color='black' name="comment outline" />
            </a>
        )

        const description = (
            <List>
                <List.Item>
                    <List horizontal>
                        <List.Item>
                            <Image src={this.props.user.avatar} avatar />
                        </List.Item>
                        <List.Item>
                            <Header as='h5'>{this.props.user.username}</Header>
                        </List.Item>
                        <List.Item>
                            <Input style={{ height: '4vh'}} placeholder='caption' onChange={this.handleChange}/> 
                        </List.Item>
                    </List>
                </List.Item>
            </List>
        )

        return (
                <Grid centered container>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Segment>
                            <Header textAlign='center' as="h2">Create A Post!</Header>
                        </Segment>
                        
                        <Form onSubmit={this.handleSubmit}>
                            <Card 
                                fluid
                                image={<PostImageUploader getPostImg={this.getPostImg} />}
                                header={header}
                                description={description}
                                extra='Comments'
                            />
                            <Form.Button size='large' color="blue">Create</Form.Button>
                        </Form>
                     
                    </Grid.Column>
                </Grid>
        )
    }
}

export default withRouter(Post)