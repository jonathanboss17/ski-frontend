import React from 'react'; 

import { Form  } from 'semantic-ui-react'; 

class CommentForm extends React.Component {
    
    render() {
        return (
            <Form onSubmit={(e) => this.props.handleSubmit(e)}>
                <Form.Input transparent placeholder='Add a comment...' value={this.props.comment} style={{ height: '4vh' }} onChange={this.props.handleChange}/>
            </Form>
        )
    }
}

export default CommentForm; 