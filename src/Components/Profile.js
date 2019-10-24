import React from 'react'; 
import ProfileContainer from './ProfileContainer'; 

const Profile = (props) => {
    return (
        <div>
            <ProfileContainer user={props.user} current_posts={props.current_posts} />
        </div>
    )
}

export default Profile; 