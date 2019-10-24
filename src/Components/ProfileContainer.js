import React from 'react'; 

import UserInfo from './UserInfo';
import UsersPosts from './UsersPosts';
import UserPostsMenu from './UserPostsMenu.js'; 
import CurrentUserInfo from './CurrentUserInfo.js';
import CurrentUserPosts from './CurrentUserPosts.js'; 

import { Container, Grid, Segment } from 'semantic-ui-react'; 

class ProfileContainer extends React.Component {

    state = {
        following: this.props.user.following
    }

    getFollowingCount = (x) => {
        this.setState({ following: [...this.state.following, x], updated: true })
    }

    render() {
        return (
            <Container>
                <br></br>
                <Segment> 
                    <Grid container centered columns={1}>
                        <Grid.Column textAlign='center' width={12}>
                            {parseInt(localStorage.getItem('user_id')) === this.props.user.id ? <CurrentUserInfo following={this.state.following.length} user={this.props.user} current_posts={this.props.current_posts} /> : <UserInfo getFollowingCount={this.getFollowingCount} user={this.props.user} />}
                            <UserPostsMenu />
                        </Grid.Column>
                    </Grid> 
                
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {parseInt(localStorage.getItem('user_id')) === this.props.user.id ? <CurrentUserPosts user={this.props.user} current_posts={this.props.current_posts} /> : <UsersPosts user={this.props.user} />}
                </Segment>
            </Container>
        )
    }
}

export default ProfileContainer; 
