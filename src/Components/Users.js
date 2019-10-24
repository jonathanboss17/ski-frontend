import React from 'react'; 
import _ from 'lodash';

import { Header, Grid, Search, Form } from 'semantic-ui-react'; 

import { withRouter } from 'react-router-dom'; 

class Users extends React.Component {

    state = {
        users: [],
        results: [], 
        user: { 
            title: null, 
            description: null, 
            image: null
        }, 
        redirect: false, 
        isLoading: false, 
        value: ''
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
                title: user.username,
                description: user.bio, 
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
        this.props.getSearchedUserId(this.state.results[0].key)
        this.props.history.push('/searchedusersshow')
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  
    handleSearchChange = (e, { value }) => {
      this.setState({ isLoading: true, value })
  
      setTimeout(() => {
        if (this.state.value.length < 1) console.log('RESET')
  
        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = (result) => re.test(result.title)
  
        this.setState({
          isLoading: false,
          results: _.filter(this.state.users, isMatch),
        })
      }, 300)
    }

    render() {        
        return (
            <Grid textAlign='center' style={{ height: '20vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header inverted as='h2'>Search Users</Header>
                    <Form onSubmit={this.handleSubmit}>
                            <Search
                                fluid
                                size='massive'
                                placeholder='Search users...'
                                loading={this.state.isLoading}
                                onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                leading: true,
                                })}
                                results={this.state.results}
                                value={this.state.value}
                                {...this.props}
                            />
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(Users)