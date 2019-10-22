import React from 'react'; 

import Profile from './Profile'; 



export default class SearchedUsersShowPage extends React.Component {

    state = {
        user: null
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            this.setUser(data)
        })
    }

    setUser = (data) => {
        let x = data.filter(user => user.username === localStorage.getItem('searched_user'))
        this.setState({ user: x[0]})
    }

    render() {
        console.log(this.state.user)
        return (
            <div>
                {this.state.user ? <Profile user={this.state.user} /> : null}
            </div>
        )
    }
}

