import React from 'react'; 

import UserInfo from './UserInfo';
import UsersPosts from './UsersPosts';
import UserPostsMenu from './UserPostsMenu.js'; 

import { Container, Grid, Segment } from 'semantic-ui-react'; 

const ProfileContainer = (props) => {
    console.log(props.user)
    return (
        <Container>
            <Segment> 
                <Grid container centered columns={1}>
                    <Grid.Column textAlign='center' width={12}>
                        <UserInfo user={props.user} />
                        <UserPostsMenu />
                    </Grid.Column>
                </Grid> 
            
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <UsersPosts user={props.user} />
            </Segment>
        </Container>
    )
}

export default ProfileContainer; 
