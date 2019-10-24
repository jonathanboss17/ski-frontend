import React from 'react'; 
import { Menu, Icon } from 'semantic-ui-react'; 
import { withRouter } from 'react-router-dom'; 

class NavBar extends React.Component {

    state = { 
        path: null, 
        activeItem: ''
    }
    
    handleClick = (e) => {
        this.setState({ activeItem: e.target.id})  
        this.props.history.push(`/${e.target.id}`)
    }

    handleLogOut = () => {
        localStorage.clear()
        this.props.history.push('/home')
    }

    renderLogButton = () => {
        return localStorage.length > 0 ? <Menu.Item name='logout' id='logout' onClick={this.handleLogOut} /> : <Menu.Item name='login' id='login' active={this.state.activeItem === 'login'} onClick={this.handleClick} />
    }

    render(){
        return (
            <Menu pointing secondary size="massive" 
            style={{ 
                overflow: 'hidden',
                backgroundColor: 'white',
                zIndex: 1, 
                position: 'fixed', 
                top: 0, 
                width: '100%'
            }}>
                <Menu.Item name='home' id='home' active={this.state.activeItem === 'home'} onClick={this.handleClick}/>
                <Menu.Item name='gear' id='gear' active={this.state.activeItem === 'gear'} onClick={this.handleClick}/>
                {/* <Menu.Item name='resorts' id='resorts' active={this.state.activeItem === 'resorts'} onClick={this.handleClick}/> */}
                <Menu.Item name="post" id="post" active={this.state.activeItem === 'post'} onClick={this.handleClick}/>
                <Menu.Item name='users' id='users' active={this.state.activeItem === 'users'} onClick={this.handleClick} />
            
    
                <Menu.Menu position='right'>       
                    <Menu.Item name='user' id='profile' active={this.state.activeItem === 'profile'} onClick={this.handleClick}>                
                        <Icon name='user' />                        
                    </Menu.Item>
                    {this.renderLogButton()}
                </Menu.Menu>
            </Menu>
        )
    }
}

export default withRouter(NavBar)