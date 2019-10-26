import React from 'react'; 

import { List, Button, Image } from 'semantic-ui-react'; 

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
        let x = this.state.user.followers.filter(x => x.id === parseInt(localStorage.getItem('user_id')))
        x.length > 0 ? this.setState({ follow: 'Unfollow', color: 'gray'}) : this.setState({ follow: 'Follow', color: 'blue' })
    }

    handleFollowClick = () => {
        const x = this.state.followers
        this.setState({ follow: 'Unfollow', color: 'gray', followers: x + 1 })

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ user_id: parseInt(localStorage.getItem('user_id')), following_id: this.state.user.id })
        }

        fetch('http://localhost:3000/follows', reqObj)
        .then(response => response.json())
        .then(data => {
            this.setState({ follow_id: data.id })
            this.props.getFollowingCount(data)
        })
        
    }

    handleUnfollowClick = () => {
        const x = this.state.followers
        this.setState({ follow: 'Follow', color: 'blue', followers: x - 1})

        const reqObj = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3000/follows/${this.state.follow_id}`, reqObj)
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
                                    <Button id={this.state.user.id} color={this.state.color} size='tiny' onClick={ this.state.follow === 'Follow' ? this.handleFollowClick : this.handleUnfollowClick }>{this.state.follow}</Button>
                                </List.Item>
                            </List>
                        </List.Item>
                        
                        <List.Item>
                            <List horizontal size='big'>
                                <List.Item>
                                    {this.props.user.posts.length} posts
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