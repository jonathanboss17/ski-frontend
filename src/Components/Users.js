import React from 'react'; 

import NavBar from './NavBar'; 

import { Header, Grid, Dropdown, Form } from 'semantic-ui-react'; 

import { Redirect } from 'react-router-dom'; 

export default class Users extends React.Component {

    state = {
        users: [], 
        user: {
            key: null, 
            text: null, 
            value: null, 
            image: null
        }, 
        redirect: false 
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                this.getUsers(this.setUser(user))
            })
        })  
    }

    setUser = (user) => {
        this.setState({
            user: {
                ...this.state.user,
                key: user.id,
                text: user.username,
                value: user.username, 
                image: { avatar: true, src: user.avatar }
            }
        }) 
        return this.state.user
    }

    getUsers = (user) => {
        this.setState({ users: [...this.state.users, user]})
    }


    handleSubmit = (e) => {
        e.preventDefault(); 
        localStorage.setItem('searched_user', e.target.childNodes[0].innerText)
        this.setState({ redirect: true })
    }

    render() {

        if(this.state.redirect){
            this.setState({ redirect: false})
            return <Redirect to='/searchedusersshow' />
        }

        return (
            <div>
                <NavBar />
                <Grid textAlign='center' style={{ height: '20vh' }} verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header inverted as='h2'>Search Users</Header>
                        <Form onSubmit={this.handleSubmit}>
                                <Dropdown
                                    clearable
                                    fluid
                                    selection
                                    options={this.state.users}
                                    search
                                    placeholder='Search A User'
                                />
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}