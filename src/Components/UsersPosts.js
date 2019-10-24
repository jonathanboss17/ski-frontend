import React from 'react'; 

import { Grid, Image, Modal, Header, List } from 'semantic-ui-react'; 

export default class UsersPosts extends React.Component {

    renderPosts = () => {
        return this.props.user.posts.map(post => {
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
                </Grid.Column>
            )
        })
    }

    render() {
        return (
            <Grid container relaxed='very' centered columns={3}>
                {this.renderPosts()}       
            </Grid>
        )
    }
}