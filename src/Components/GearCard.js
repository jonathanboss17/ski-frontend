import React from 'react'; 

import GearCardHeader from './GearCardHeader';
import GearCardDescription from './GearCardDescription'; 
import CommentForm from './CommentForm'; 
import GearCardModal from './GearCardModal'; 

import { Card, Image, Modal, Header } from 'semantic-ui-react'; 


export default class GearCard extends React.Component {
    
    render() {
        return (
            <Card fluid>
                <GearCardModal img={this.props.post.img}/>
                <Card.Content>
                    <Card.Header>
                        <GearCardHeader />
                    </Card.Header>
                    <Card.Meta>
                        21 likes
                    </Card.Meta>
                    <Card.Description>
                        <GearCardDescription caption={this.props.post.caption} />
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <CommentForm />
                </Card.Content>
            </Card>
        )
    }
}