import React from 'react'; 

import GearCardHeader from './GearCardHeader';
import GearCardDescription from './GearCardDescription'; 
import CommentForm from './CommentForm'; 
import GearCardModal from './GearCardModal'; 

import { Card } from 'semantic-ui-react'; 

const GearCard = (props) => {

        return (
            <Card fluid>
                <GearCardModal img={props.post.img}/>
                <Card.Content>
                    <Card.Header>
                        <GearCardHeader />
                    </Card.Header>
                    <Card.Meta>
                        {props.post.likes.length} likes
                    </Card.Meta>
                    <Card.Description>
                        <GearCardDescription caption={props.post.caption} />
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <CommentForm />
                </Card.Content>
            </Card>
        )
}

export default GearCard; 