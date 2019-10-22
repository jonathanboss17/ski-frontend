import React from 'react'; 

import { List, Header } from 'semantic-ui-react'; 

const GearCardDescription = (props) => {
    return (
        <List horizontal>
            <List.Item>
                <Header as='h5'>{props.username}</Header>
            </List.Item>
            <List.Item>
                {props.caption}
            </List.Item>
        </List>
    )
}

export default GearCardDescription;