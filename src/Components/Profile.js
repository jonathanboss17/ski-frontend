import React from 'react'; 
import NavBar from './NavBar'; 
import ProfileContainer from './ProfileContainer'; 

export default class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: null, 
            avatar: null, 
            bio: null,
            user_posts: []
        }
    }
    
    componentDidMount() {
        const reqObj = {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json', 
                'Authorization': localStorage.getItem('jwt')
            }
        }

        fetch('http://localhost:3000/profile', reqObj)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                username: data.username, 
                avatar: data.avatar, 
                bio: data.bio,
                user_posts: data.posts
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <ProfileContainer info={this.state} />
            </div> 
        )
    }
}