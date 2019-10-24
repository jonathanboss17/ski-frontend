import React from 'react'; 
import { Image } from 'cloudinary-react'; 
import { Modal, Header, List } from 'semantic-ui-react'; 


const GearCardModal = (props) => {
    console.log(props)
    return (
        <Modal trigger={
            <Image 
                cloudName='jboss17' 
                publicId={props.post.img}
                height='500'
                gravity='faces'
                crop='fill'
            />} 
        dimmer='blurring' basic>
                <Image cloudName='jboss17' publicId={props.post.img} size='massive' src={props.post.img} />
                <Modal.Content>
                            <List horizontal>
                                <List.Item>
                                    <Image src={props.post.user.avatar} avatar/>{props.post.user.username}
                                </List.Item>
                                <List.Item>
                                    <Header inverted as='h4'>{props.post.caption}</Header>
                                </List.Item>
                                <List.Item>
                                    {props.post.likes.length} likes
                                </List.Item>
                                <List.Item>
                                    {props.post.comments.length} comments
                                </List.Item>
                            </List>                   
                </Modal.Content>
        </Modal>
    )
}

export default GearCardModal; 