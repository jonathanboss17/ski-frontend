import React from 'react'; 

import { List, Header, Image } from 'semantic-ui-react'; 

const GearCardDescription = (props) => {
    return (
        <List horizontal>
            <List.Item>
                <Image src={props.avatar} avatar/>
            </List.Item>
            <List.Item>
                <Header as='h3'>{props.username}</Header>
            </List.Item>
            <List.Item>
                {props.caption}
            </List.Item>
        </List>
    )
}

export default GearCardDescription;