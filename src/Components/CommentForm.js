import React from 'react'; 

import { Form  } from 'semantic-ui-react'; 

class CommentForm extends React.Component {

    // state = {
    //     comment: null
    // }

    // handleChange = (e) => {
    //     this.setState({ comment: e.target.value})
    // }

    // handleSubmit = () => {
    //     const reqObj = {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }, 
    //         body: JSON.stringify({ comment: this.state.comment, user_id: this.props.user.id, post_id: this.props.post.id})
    //     }

    //     fetch('http://localhost:3000/comments', reqObj)
    //     .then(response => response.json())
    //     .then(console.log)
    // }
    


    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Input placeholder='Add a comment...' onChange={this.props.handleChange}/>
            </Form>
        )
    }
}

export default CommentForm; 