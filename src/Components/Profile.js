import React from 'react'; 
import NavBar from './NavBar'; 

export default class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: null
        }
    }
    
    componentDidMount() {

        const reqObj = {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json', 
                'Authorization': `Bearer ${this.props.location.state}`
            }
        }

        fetch('http://localhost:3000/profile', reqObj)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                Profile Page
            </div> 
        )
    }
}