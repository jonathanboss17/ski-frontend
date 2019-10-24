import React from 'react'; 

import { Button } from 'semantic-ui-react'; 

import { withRouter } from 'react-router-dom'; 

class DeleteProfile extends React.Component {

    handleDelete = () => {
        const reqObj = {
            method: 'DELETE'
        }
        fetch(`http://localhost:3000/users/${parseInt(localStorage.getItem('user_id'))}`, reqObj)
        .then(response => console.log(response))
        .then(() => {
            localStorage.clear()
            this.props.history.push('/home')
        })
        
    }

    render() {
        return (
            <Button basic color='black' size='tiny' onClick={this.handleDelete}>Delete Account</Button>
        )
    }
}

export default withRouter(DeleteProfile)