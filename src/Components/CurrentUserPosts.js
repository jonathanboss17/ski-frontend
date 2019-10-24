import React from 'react'; 

import { Grid, Image, Modal, Header, List } from 'semantic-ui-react'; 

export default class UsersPosts extends React.Component {

    renderPosts = () => {
        return this.props.current_posts.map(post => {
            return (
                <Grid.Column padded>
                    <Modal dimmer='blurring' trigger={<Image src={post.img} />} basic>
                        <Image size='massive' src={post.img} />
                        <Modal.Content>
                            <List horizontal>
                                <List.Item>
                                    <Image src={this.props.user.avatar} avatar/>{this.props.user.username}
                                </List.Item>
                                <List.Item>
                                    <Header inverted as='h4'>{post.caption}</Header>
                                </List.Item>
                                <List.Item>
                                    {post.likes.length} likes
                                </List.Item>
                                <List.Item>
                                    {post.comments.length} comments
                                </List.Item>
                            </List>                   
                        </Modal.Content>
                    </Modal>
                    <br></br>
                    <br></br>
                </Grid.Column>
            )
        })
    }

    renderError = () => {
        return (
                <Header as='h2' fluid centered>
                    <Image src="https://cdn4.iconfinder.com/data/icons/emoticons-outline/512/21-512.png" />
                    You Don't Have Any Posts
                    <br></br>
                    <br></br>
                    <br></br>
                </Header>
        )
    }

    render() {
        return (
            <Grid container relaxed='very' centered columns={3}>
                {this.props.user.posts.length > 0 ?  this.renderPosts() : this.renderError()}   
            </Grid>
        )
    }
}