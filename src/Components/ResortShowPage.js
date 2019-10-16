import React from 'react'; 
import NavBar from './NavBar'; 

export default class ResortShowPage extends React.Component {

    componentDidMount() { 
        // fetch(`https://skimap.org/SkiAreas/view/229.json`)
        // .then(res => {
        //     debugger
        // })
        // .then(data => {
        //     debugger
        // })
    }
    

    render() {
        return (
            <div>
                <NavBar />
                Resort Show Page
            </div>
        )
    }
}

