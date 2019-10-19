import React from 'react'; 

import { Grid, Image, Modal, Header, List } from 'semantic-ui-react'; 

export default class UsersPosts extends React.Component {

    renderPosts = () => {
        return this.props.info.user_posts.map(post => {
            return (
                <Grid.Column padded>
                    <Modal dimmer='blurring' trigger={<Image src={post.img} />} basic>
                        <Image size='massive' src={post.img} />
                        <Modal.Content>
                            <List horizontal>
                                <List.Item>
                                    <Image src={this.props.info.avatar} avatar/>{this.props.info.username}
                                </List.Item>
                                <List.Item>
                                    <Header inverted as='h3'>{post.caption}</Header>
                                </List.Item>
                                <List.Item>
                                    5 Likes
                                </List.Item>
                                <List.Item>
                                    2 Comments
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
            <Grid container relaxed='very' centered columns={3} celled>
                <Grid.Row>
                    {this.renderPosts()}       
                </Grid.Row>
            </Grid>
        )
    }
}