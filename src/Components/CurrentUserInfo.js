import React from 'react'; 
import { List, Button, Image } from 'semantic-ui-react'; 

import EditProfile from './EditProfile'; 
import DeleteProfile from './DeleteProfile'; 

export default class CurrentUserInfo extends React.Component {

    state = {
        user: this.props.user,
        followers: this.props.user.followers.length
    }

    updateUser = (data) => {
        this.setState({ user: data})
    }

    render() {
        console.log(this.props.following_count)
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
                                    <EditProfile updateUser={this.updateUser} user={this.state.user} />
                                </List.Item>
                                <List.Item>
                                    <DeleteProfile />
                                </List.Item>
                            </List>
                        </List.Item>
                        
                        <List.Item>
                            <List horizontal size='big'>
                                <List.Item>
                                    {this.props.current_posts.length} posts
                                </List.Item>
                                <List.Item>
                                    {this.state.followers} followers
                                </List.Item>
                                <List.Item>
                                    {this.props.following} following
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