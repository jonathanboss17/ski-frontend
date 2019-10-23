import React from 'react'; 

import { Form  } from 'semantic-ui-react'; 

class CommentForm extends React.Component {
    
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Input placeholder='Add a comment...' onChange={this.props.handleChange}/>
            </Form>
        )
    }
}

export default CommentForm; 