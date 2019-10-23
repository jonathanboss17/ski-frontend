import React from 'react'; 
import ProfileContainer from './ProfileContainer'; 

const Profile = (props) => {
    return (
        <ProfileContainer user={props.user} />
    )
}

export default Profile; 