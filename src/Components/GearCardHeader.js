import React from 'react'; 

import { List, Icon } from 'semantic-ui-react'; 

const GearCardHeader = (props) => {
    return (
        <div>
            <Icon name='like' onClick={props.handleLikes} size='large'/>
        </div>
    )
}

export default GearCardHeader; 