import React from 'react'; 

import GearCardHeader from './GearCardHeader';
import GearCardDescription from './GearCardDescription'; 
import CommentForm from './CommentForm';
import GearCardModal from './GearCardModal'; 

import { Card, List } from 'semantic-ui-react'; 

class GearCard extends React.Component {

    state = {
        like_count: this.props.post.likes.length, 
        comment: null, 
        comments: this.props.post.comments
    }

    handleLikes = () => {
        const x = this.state.like_count; 
        this.setState({ like_count: x+1 })
        
        const reqObj = {
            method: 'POST', 
            header: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ user_id: localStorage.getItem('user_id'), post_id: this.props.post.id })
        }

        fetch('http://localhost:3000/likes', reqObj)
        .then(response => response.json())
        .then(console.log)
    }

    // ------COMMMENTS
    handleChange = (e) => {
        this.setState({ comment: e.target.value})
    }

    handleSubmit = (e) => {
        const reqObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ comment: this.state.comment, user_id: localStorage.getItem('user_id'), post_id: this.props.post.id})
        }

        fetch('http://localhost:3000/comments', reqObj)
        .then(response => response.json())
        .then(data => {
           this.setState({ comments: [...this.state.comments, data.comment]})
        })
    }

    renderComments = () => {
        return this.state.comments.map(x => {
            return (
                <List.Item>
                    {x.comment}
                </List.Item>
            )
        })
    }



    render() {
        return (
            <Card fluid>
                <GearCardModal img={this.props.post.img}/>
                <Card.Content>
                    <Card.Header>
                        <GearCardHeader handleLikes={this.handleLikes} />
                    </Card.Header>
                    <Card.Meta>
                        {this.state.like_count} likes
                    </Card.Meta>
                    <Card.Description>
                        <GearCardDescription caption={this.props.post.caption} username={this.props.post.user.username} />
                        <List>
                            {this.renderComments()}
                        </List>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <CommentForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </Card.Content>
            </Card>
        )
    }
}

export default GearCard; 