import React from 'react'; 

import { Button } from 'semantic-ui-react'; 

export default class PostImageUploader extends React.Component {
    checkUploadResult = (result, widget) => {
        if(result.event === 'success'){
            // console.log(resultEvent.info.secure_url)
            this.props.getPostImg(result.info.secure_url)
        //    result.info.public_id has all the info
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