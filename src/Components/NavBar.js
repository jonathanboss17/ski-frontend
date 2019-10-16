import React from 'react'; 
import { Menu, Icon } from 'semantic-ui-react'; 
import { Redirect } from 'react-router-dom'; 

export default class NavBar extends React.Component {
    // could have main search bar ... look for city, state and show all the resorts for that location ... and the resort page will just show all of the fucking resorts

    state = { path: null }

    loggedIn = () => {
        // here is where we display Log In if no user ... or Log Out if user logged in
    }

    // fix the link stuff for login once ... auth is fixed
    
    handleClick = (e) => {
        this.setState({ path: e.target.id })
    }

    render(){

        if(this.state.path!==null){
            let y = `/${this.state.path}`
            return <Redirect to={y} />
        }
        
        return (
                <Menu secondary inverted>
                    <Menu.Item name='home' id='main' onClick={this.handleClick}/>
                    <Menu.Item name='gear' id='gear' onClick={this.handleClick}/>
                    {/* <Menu.Item name='resorts' id='resorts' onClick={this.handleClick}/> */}
           
                    <Menu.Menu position='right'>

                        <Menu.Item id='profile' onClick={this.handleClick}>
                        {/* i lose the semantic if i put the listener on the Icon ... but now I can only click around the Icon */}
                            <Icon name='user' />
                        </Menu.Item>
                
                        <Menu.Item name='logout' id='logout' />

                    </Menu.Menu>
                </Menu>
        )
    }
}
