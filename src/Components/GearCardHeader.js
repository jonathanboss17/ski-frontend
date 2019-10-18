import React from 'react'; 

import { List, Icon } from 'semantic-ui-react'; 

const GearCardHeader = () => {
    return (
        <List horizontal>
            <List.Item>
                <a>
                    <Icon color='red' name='heart outline' size='large'/>
                </a>
            </List.Item>
            <List.Item>
                <a>
                    <Icon name="comment outline" size='large'/>
                </a>
            </List.Item>
        </List>
    )
}

export default GearCardHeader; 