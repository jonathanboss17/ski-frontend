import React from 'react'; 
import { Grid, Header, Form, Search } from 'semantic-ui-react'; 
import _ from 'lodash';

import { withRouter } from 'react-router-dom'; 
// import a Redirect upon submission of Form

class SearchBar extends React.Component {

    state = {
        redirect: false, 
        isLoading: false, 
        value: '', 
        results: []
    }


    handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  
    handleSearchChange = (e, { value }) => {
      this.setState({ isLoading: true, value })
  
      setTimeout(() => {
        if (this.state.value.length < 1) return this.setState({ isLoading: false, results: [], value: '' })
  
        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = (result) => re.test(result.title)
  
        this.setState({
          isLoading: false,
          results: _.filter(this.props.resorts, isMatch),
        })
      }, 300)
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.props.getId(this.state.results[0].id)
        this.props.history.push('/resort/show')
      }

    render() { 
        return (
            <Grid textAlign='center' style={{ height: '65vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 600}}>
                    <Form onSubmit={this.handleSearchSubmit}>
                        <Header as='h2'>
                            <Search
                                fluid
                                size='large'
                                placeholder='Search Your Resort'
                                loading={this.state.isLoading}
                                onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                leading: true,
                                })}
                                results={this.state.results}
                                value={this.state.value}
                                {...this.props}
                            />
                        </Header>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(SearchBar)