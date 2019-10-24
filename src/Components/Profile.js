import React from 'react'; 
import ProfileContainer from './ProfileContainer'; 

const Profile = (props) => {
    return (
        <div>
            <ProfileContainer user={props.user} />
        </div>
    )
}

export default Profile; 