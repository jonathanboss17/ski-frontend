import React from 'react'; 

import { Card } from 'semantic-ui-react'; 

export default class ResortCard extends React.Component {
    render() {
        return (
            <div>
                <Card raised image={'https://i.imgur.com/Q7mZ77z.jpg'} />
                <Card raised image={'https://i.imgur.com/Q7mZ77z.jpg'} />
                <Card raised image={'https://i.imgur.com/Q7mZ77z.jpg'} />
                <Card raised image={'https://i.imgur.com/Q7mZ77z.jpg'} />
            </div>
        )
    }
}