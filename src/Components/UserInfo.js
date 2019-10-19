import React from 'react'; 

import { List, Button, Image } from 'semantic-ui-react'; 

const UserInfo = (props) => {
    
    return ( 
        <List horizontal>
            <List.Item>
                <Image src={props.info.avatar} size='small' verticalAlign='bottom' rounded />
            </List.Item>
            
            <List.Item>
                <List>
                    <List.Item>
                        <List horizontal size='massive'>
                            <List.Item>
                                {props.info.username}
                            </List.Item>
                            <List.Item>
                                <Button basic color='black' size='tiny'>Edit Profile</Button>
                            </List.Item>
                        </List>
                    </List.Item>
                    
                    <List.Item>
                        <List horizontal size='big'>
                            <List.Item>
                                {props.info.user_posts.length} posts
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
                                <List.Header>{props.info.bio}</List.Header>
                            </List.Item>
                        </List>
                    </List.Item>

                </List>
            </List.Item>
        </List> 
    )
}

export default UserInfo; 