import React from 'react'; 
import ProfileContainer from './ProfileContainer'; 

import NavBar from './NavBar'; 

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <NavBar />
            <ProfileContainer user={props.user} />
        </div> 
    )
}

export default Profile; 