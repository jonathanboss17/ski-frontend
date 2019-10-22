import React from 'react'; 
import { Menu, Icon, Sticky } from 'semantic-ui-react'; 
import { Redirect } from 'react-router-dom'; 


export default class NavBar extends React.Component {
    // need to make this bigger

    state = { 
        path: null
    }

    loggedIn = () => {
        // here is where we display Log In if no user ... or Log Out if user logged in
    }
    
    handleClick = (e) => {
        this.setState({ path: e.target.id })
        if(e.target.id === 'logout'){
            localStorage.clear()
            // this.props.clearUser()
            this.setState({ path: 'login'})
        }
    }

    

    renderLogButton = () => {
        return localStorage.length > 0 ? <Menu.Item name='logout' id='logout' onClick={this.handleClick} /> : <Menu.Item name='login' id='login' onClick={this.handleClick} />
    }

    render(){
        // Sticky not working ... need to edit
        if(this.state.path!==null){
            let y = `/${this.state.path}`
            return <Redirect to={y} />
        }
        
        return (
            <Sticky>
                <Menu secondary inverted size="massive">
                    <Menu.Item name='home' id='' onClick={this.handleClick}/>
                    <Menu.Item name='gear' id='gear' onClick={this.handleClick}/>
                    <Menu.Item name='resorts' id='resorts' onClick={this.handleClick}/>
                    <Menu.Item name="post" id="post" onClick={this.handleClick}/>
                    <Menu.Item name='users' id='users' onClick={this.handleClick} />
                   
           
                    <Menu.Menu position='right'>
                        <Menu.Item id='profile' onClick={this.handleClick}>
                        {/* i lose the semantic if i put the listener on the Icon ... but now I can only click around the Icon */}
                            <Icon name='user' />
                        </Menu.Item>
                        {this.renderLogButton()}
                    </Menu.Menu>
                </Menu>
            </Sticky>
        )
    }
}
