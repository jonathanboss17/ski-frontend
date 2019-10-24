import React from 'react'; 

import GearCardHeader from './GearCardHeader';
import GearCardDescription from './GearCardDescription'; 
import CommentForm from './CommentForm';
// import GearCardModal from './GearCardModal'; 

import { Image } from 'cloudinary-react';
import { Card, List, Header } from 'semantic-ui-react'; 

class GearCard extends React.Component {

    state = {
        like_count: this.props.post.likes.length, 
        comment: '', 
        comments: this.props.post.comments, 
        newComment: ''
        // panels: [{ key: this.props.post.comments[0].comment }]
    }

    handleLikes = () => {
        const x = this.state.like_count; 
        this.setState({ like_count: x+1 })
        
        const reqObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ user_id: parseInt(localStorage.getItem('user_id')), post_id: this.props.post.id })
        }

        fetch('http://localhost:3000/likes', reqObj)
    }

    // ------COMMMENTS
    handleChange = (e) => {
        this.setState({ comment: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault(); 

        const reqObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ comment: this.state.comment, user_id: parseInt(localStorage.getItem('user_id')), post_id: this.props.post.id})
        }

        fetch('http://localhost:3000/comments', reqObj)
        .then(response => response.json())
        .then(data => {
            // this.setState({ comments: [...this.state.comments, data.comment]})
            this.setState({ newComment: data.comment})
            this.setState({ comment: ''})
        })
    }

    renderComments = () => {
        return this.state.comments.map(x => {
            return (
                <List.Item>
                    <List horizontal>
                        <List.Item>
                            <Header as='h5'>{this.props.user.username}</Header>
                        </List.Item>
                        <List.Item>
                            {x.comment}
                        </List.Item>
                    </List>
                </List.Item>
            )
        })
    }

    renderNewComment = () => {
        return (
            <List.Item>
                <List horizontal>
                    <List.Item>
                        <Header as='h5'>{this.props.user.username}</Header>
                    </List.Item>
                    <List.Item>
                        {this.state.newComment}
                    </List.Item>
                </List>
            </List.Item>
        )
    }



    render() {
        return (
            <Card fluid>
                {/* <GearCardModal post={this.props.post}/> */}
                <Image 
                cloudName='jboss17' 
                publicId={this.props.post.img}
                height='500'
                gravity='faces'
                crop='scale'
                />
                <Card.Content>
                    <Card.Header>
                        <GearCardHeader handleLikes={this.handleLikes} />
                    </Card.Header>
                    <Card.Meta>
                        {this.state.like_count} likes
                    </Card.Meta>
                    <Card.Description>
                        <GearCardDescription avatar={this.props.post.user.avatar} caption={this.props.post.caption} username={this.props.post.user.username} />
                        <List>
                            {this.renderComments()}
                            {this.state.newComment !== '' ? this.renderNewComment() : ''}
                        </List>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <CommentForm comment={this.state.comment} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </Card.Content>
            </Card>
        )
    }
}

export default GearCard; 