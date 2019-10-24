import React from 'react'; 

import { List, Button, Image } from 'semantic-ui-react'; 

// import { Image, Transformation } from 'cloudinary-react'; 

import EditProfile from './EditProfile'; 
import DeleteProfile from './DeleteProfile'; 

class UserInfo extends React.Component {

    state = {
        user: this.props.user, 
        follow: 'Follow', 
        color: 'blue', 
        follow_id: null, 
        followers: this.props.user.followers.length, 
        following: this.props.user.following.length
    }

    componentDidMount() {
        let x = this.props.user.followers.filter(x => x.id === parseInt(localStorage.getItem('user_id')))
        x.length > 0 ? this.setState({ follow: 'Unfollow', color: 'gray'}) : this.setState({ follow: 'Follow', color: 'blue' })
    }

    handleFollowClick = () => {
        let x = this.props.user.followers.length

        this.setState({ follow: 'Unfollow', color: 'gray', followers: x + 1 })

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ user_id: parseInt(localStorage.getItem('user_id')), following_id: this.props.user.id })
        }

        fetch('http://localhost:3000/follows', reqObj)
        .then(response => response.json())
        .then(data => {
            this.setState({ follow_id: data.id })
        })
        
    }

    handleUnfollowClick = () => {

        let x = this.props.user.followers.length
        this.setState({ follow: 'Follow', color: 'blue', followers: x - 1})

        const reqObj = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3000/follows/${this.state.follow_id}`, reqObj)
    }

    renderEditButton = () => {
        let x = parseInt(localStorage.getItem('user_id'))
        return this.props.user.id === x ? <EditProfile updateUser={this.updateUser} user={this.props.user} /> : <Button id={this.props.user.id} color={this.state.color} size='tiny' onClick={ this.state.follow === 'Follow' ? this.handleFollowClick : this.handleUnfollowClick }>{this.state.follow}</Button>
    }

    renderDeleteButton = () => {
        let x = parseInt(localStorage.getItem('user_id'))
        return this.props.user.id === x ? <DeleteProfile /> : null
    }

    updateUser = (data) => {
        this.setState({ user: data})
    }

    render() {
        return ( 
            <List horizontal>
                <List.Item>
                    <Image src={this.state.user.avatar} size='small' verticalAlign='bottom' rounded/>
                </List.Item>
                
                <List.Item>
                    <List>
                        <List.Item>
                            <List horizontal size='massive'>
                                <List.Item>
                                    {this.state.user.username}
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
                                    {this.state.user.posts.length} posts
                                </List.Item>
                                <List.Item>
                                    {this.state.followers} followers
                                </List.Item>
                                <List.Item>
                                    {this.state.following} following
                                </List.Item>
                            </List>
                        </List.Item>
                    
                        <List.Item>
                            <List horizontal size='large'>
                                <List.Item>
                                    <List.Header>{this.state.user.bio}</List.Header>
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