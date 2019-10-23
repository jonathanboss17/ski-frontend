import React from 'react'; 

import { List, Button, Image } from 'semantic-ui-react'; 

// import { Image, Transformation } from 'cloudinary-react'; 

import EditProfile from './EditProfile'; 
import DeleteProfile from './DeleteProfile'; 

class UserInfo extends React.Component {

    state = {
        follow: 'Follow', 
        color: 'blue'
    }

    handleFollowClick = () => {
        this.setState({ follow: 'Following', color: 'gray'})

        const reqObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ user_id: parseInt(localStorage.getItem('user_id')), following_id: this.props.user.id })
        }

        fetch('http://localhost:3000/follows', reqObj)
        
    }

    renderEditButton = () => {
        let x = parseInt(localStorage.getItem('user_id'))
        return this.props.user.id === x ? <EditProfile user={this.props.user} /> : <Button id={this.props.user.id} color={this.state.color} size='tiny' onClick={this.handleFollowClick}>{this.state.follow}</Button>
    }

    renderDeleteButton = () => {
        let x = parseInt(localStorage.getItem('user_id'))
        return this.props.user.id === x ? <DeleteProfile /> : null
    }

    render() {
        return ( 
            <List horizontal>
                <List.Item>
                    <Image src={this.props.user.avatar} size='small' verticalAlign='bottom' rounded/>
                </List.Item>
                
                <List.Item>
                    <List>
                        <List.Item>
                            <List horizontal size='massive'>
                                <List.Item>
                                    {this.props.user.username}
                                </List.Item>
                                <List.Item>
                                    {this.renderEditButton()}
                                </List.Item>
                                <List.Item>
                                    {this.renderDeleteButton()}
                                </List.Item>
                            </List>
                        </List.Item>
                        
                        <List.Item>
                            <List horizontal size='big'>
                                <List.Item>
                                    {this.props.user.posts.length} posts
                                </List.Item>
                                <List.Item>
                                    {this.props.user.followers.length} followers
                                </List.Item>
                                <List.Item>
                                    {this.props.user.following.length} following
                                </List.Item>
                            </List>
                        </List.Item>
                    
                        <List.Item>
                            <List horizontal size='large'>
                                <List.Item>
                                    <List.Header>{this.props.user.bio}</List.Header>
                                </List.Item>
                            </List>
                        </List.Item>
        
                    </List>
                </List.Item>
            </List> 
        )
        
    }
}

export default UserInfo; 