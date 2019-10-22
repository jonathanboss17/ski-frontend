import React from 'react'; 

import { List, Image } from 'semantic-ui-react'; 

import EditProfile from './EditProfile'; 
import DeleteProfile from './DeleteProfile'; 

const UserInfo = (props) => {
    return ( 
        <List horizontal>
            <List.Item>
                <Image src={props.user.avatar} size='small' verticalAlign='bottom' rounded />
            </List.Item>
            
            <List.Item>
                <List>
                    <List.Item>
                        <List horizontal size='massive'>
                            <List.Item>
                                {props.user.username}
                            </List.Item>
                            <List.Item>
                                <EditProfile user={props.user}/>
                            </List.Item>
                            <List.Item>
                                <DeleteProfile />
                            </List.Item>
                        </List>
                    </List.Item>
                    
                    <List.Item>
                        <List horizontal size='big'>
                            <List.Item>
                                {props.user.posts.length} posts
                            </List.Item>
                            <List.Item>
                                0 followers
                            </List.Item>
                            <List.Item>
                                0 following
                            </List.Item>
                        </List>
                    </List.Item>
                
                    <List.Item>
                        <List horizontal size='large'>
                            <List.Item>
                                <List.Header>{props.user.bio}</List.Header>
                            </List.Item>
                        </List>
                    </List.Item>

                </List>
            </List.Item>
        </List> 
    )
}

export default UserInfo; 