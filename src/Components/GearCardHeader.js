import React from 'react'; 

import { List, Icon } from 'semantic-ui-react'; 

const GearCardHeader = (props) => {
    return (
        <List horizontal size="huge">
            <List.Item>
                <Icon color='black' name='heart outline' onClick={props.handleLikes}/>
            </List.Item>
            <List.Item>
                <Icon color='black' name="comment outline"/>
            </List.Item>
        </List>
    )
}

export default GearCardHeader; 