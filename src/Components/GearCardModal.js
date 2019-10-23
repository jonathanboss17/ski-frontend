import React from 'react'; 
import { Image, Transformation } from 'cloudinary-react'; 
import { Modal, Header } from 'semantic-ui-react'; 

const GearCardModal = (props) => {
    return (
        <Modal trigger={

        <Image publicId={props.img}>
            <Transformation height='250' width='250' gravity='faces' crop='fill' />
        </Image>
        
        } size='fullscreen'>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='massive' src={props.img} />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                    We've found the following gravatar image associated with your e-mail
                    address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default GearCardModal; 