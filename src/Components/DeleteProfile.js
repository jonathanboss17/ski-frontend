import React from 'react'; 

import { Button } from 'semantic-ui-react'; 

export default class DeleteProfile extends React.Component {

    handleDelete = () => {
        const reqObj = {
            method: 'DELETE'
        }
        fetch(`http://localhost:3000/users/${localStorage.getItem('user_id')}`, reqObj)
    }

    render() {
        return (
            <Button basic color='black' size='tiny' onClick={this.handleDelete}>Delete Account</Button>
        )
    }
}