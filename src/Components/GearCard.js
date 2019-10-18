import React from 'react'; 

import GearCardHeader from './GearCardHeader';
import GearCardDescription from './GearCardDescription'; 
import CommentForm from './CommentForm'; 

import { Card, Image } from 'semantic-ui-react'; 


export default class GearCard extends React.Component {
    
    render() {
        return (
            <Card fluid>
                <Image src={this.props.post.img} wrapped ui={false} />
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