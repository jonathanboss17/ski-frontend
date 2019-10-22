import React from 'react'; 

import { Button } from 'semantic-ui-react'; 

export default class UserImageUploader extends React.Component {

    checkUploadResult = (resultEvent, widget) => {
        if(resultEvent.event === 'success'){
            widget.close()
            this.props.getAvatar(resultEvent.info.secure_url)
            this.props.getPostImg(resultEvent.info.secure_url)
        }
    }
    
    showWidget = (widget) => {
        widget.open()
    }

    render() {

        let widget = window.cloudinary.createUploadWidget({
            cloudName: 'jboss17', 
            uploadPreset: 'dmovhfoo'
        }, (error, result) => { this.checkUploadResult(result, widget) })

        return (
            <Button onClick={() => this.showWidget(widget)}>Upload Photo</Button>
        )
    }
}