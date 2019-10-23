import React from 'react'; 
import { Menu, Icon, Sticky } from 'semantic-ui-react'; 
import { withRouter } from 'react-router-dom'; 

class NavBar extends React.Component {
    // need to make this bigger

    state = { 
        path: null, 
        activeItem: ''
    }
    
    handleClick = (e) => {
        this.setState({ activeItem: e.target.id})  
        if(e.target.id === 'logout'){
            localStorage.clear()
            this.props.history.push('/login')
        }
        this.props.history.push(`/${e.target.id}`)
    }

    renderLogButton = () => {
        return localStorage.length > 0 ? <Menu.Item name='logout' id='logout' onClick={this.handleClick} /> : <Menu.Item name='login' id='login' onClick={this.handleClick} />
    }

    render(){
        // Sticky not working ... need to edit
        return (
            <Sticky className='NavBar'>
                <Menu pointing secondary size="massive">
                    <Menu.Item name='home' id='home' active={this.state.activeItem === 'home'} onClick={this.handleClick}/>
                    <Menu.Item name='gear' id='gear' active={this.state.activeItem === 'gear'} onClick={this.handleClick}/>
                    <Menu.Item name='resorts' id='resorts' active={this.state.activeItem === 'resorts'} onClick={this.handleClick}/>
                    <Menu.Item name="post" id="post" active={this.state.activeItem === 'post'} onClick={this.handleClick}/>
                    <Menu.Item name='users' id='users' active={this.state.activeItem === 'users'} onClick={this.handleClick} />
                   
           
                    <Menu.Menu position='right'>       
                        <Menu.Item name='user' id='profile' active={this.state.activeItem === 'profile'} onClick={this.handleClick}>                
                            <Icon name='user' />                        
                        </Menu.Item>
                         {this.renderLogButton()}
                    </Menu.Menu>
                </Menu>
            </Sticky>
        )
    }
}

export default withRouter(NavBar)