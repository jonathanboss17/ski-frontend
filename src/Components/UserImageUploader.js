import React from 'react'; 

import { Form } from 'semantic-ui-react'; 

export default class UserImageUploader extends React.Component {

    checkUploadResult = (resultEvent, widget) => {
        if(resultEvent.event === 'success'){
            this.props.getAvatar(resultEvent.info.secure_url)
        } 
    }
    
    showWidget = () => {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: 'jboss17', 
            uploadPreset: 'dmovhfoo'
        }, (error, result) => { 
            this.checkUploadResult(result, widget) 
        }) 
        widget.open()
    }

    render() {
        return (
            <Form>
                <Form.Button size='tiny' onClick={() => this.showWidget()}>Upload Photo</Form.Button>
            </Form>
        )
    }
}