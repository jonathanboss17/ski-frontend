import React from 'react'; 

import { Menu } from 'semantic-ui-react'; 

const UserPostsMenu = () => {
        return (
            <Menu pointing secondary>
                <Menu.Item name='posts' active={'posts'} />
            </Menu>   
        )
}

export default UserPostsMenu; 

