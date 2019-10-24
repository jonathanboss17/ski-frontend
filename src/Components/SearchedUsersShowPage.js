import React from 'react'; 

import Profile from './Profile'; 



export default class SearchedUsersShowPage extends React.Component {

    state = {
        user: null
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/users/${this.props.id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({ user: data })
        })
    }

    render() {
        return (
            <div>
                {this.state.user ? <Profile user={this.state.user} /> : null}
            </div>
        )
    }
}

