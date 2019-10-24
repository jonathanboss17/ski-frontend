import React from 'react'; 
// import { Document, Page, pdfjs } from 'react-pdf';
import { Segment, Image, Grid, Header, List, Modal, Button } from 'semantic-ui-react';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { Link } from 'react-router-dom'; 



// need Redux
export default class ResortShowPage extends React.Component {

    state = {
        map_id: null,
        name: null, 
        lifts: null,
        runs: null, 
        acreage: null, 
        terrain_park: null, 
        night_skiing: null,
        top_el: null, 
        base_el: null,
        map: null,
        modal_img: null, 
        modal_header: null
    }

    componentDidMount() { 
        fetch(`https://skimap.org/SkiAreas/view/${this.props.ski_area_id}.json`)
        .then(response => response.json())
        .then(data => {
            this.setState({ map_id: data.ski_maps[0].id })
            this.setState({ name: data.name })
            this.setState({ lifts: data.lift_count})
            this.setState({ runs: data.run_count})
            this.setState({ acreage: data.skiable_acreage})
            this.setState({ terrain_park: data.terrain_park})
            this.setState({ night_skiing: data.night_skiing})
            this.setState({ top_el: data.top_elevation})
            this.setState({ base_el: data.bottom_elevation})
            this.setState({ website: data.official_website })
            this.getMap()
        })
    }

    getMap = () => {
        // converted from XML to JSON
        fetch(`https://skimap.org/SkiMaps/view/${this.state.map_id}.xml`)
        .then(response => response.text())
        .then(data => {
            let xml2js = require('xml2js');
            let parser = new xml2js.Parser();
            let x = data.replace("\ufeff", "");
            return parser.parseStringPromise(x)
        })
        .then(result => {
            this.setState({map: result.skiMap.thumbnail[5].$.url} )
            this.setState({ modal_img: result.skiMap.thumbnail[5].$.url })
            // this.setState({ modal_img: result.skiMap.unprocessed[0].$.url })
            // this.setState({ modal_header: result.skiMap.caption[0] })
        })
    }
    

    render() {
        return (
            <div id="resort_show">
                <Header inverted as='h2'>{this.state.name}</Header>
                <br></br>
                <Grid textAlign='center'>
                        <Segment.Group>
                                <Segment padded>
                                    <Image wrapped size='big' src={this.state.map} centered/>
                                </Segment>
                                <Segment padded>
                                    <List>
                                        <List.Item>Lifts: {this.state.lifts} </List.Item>
                                        <List.Item>Runs: {this.state.runs}</List.Item>
                                        {/* <List.Item>Longest Run: {this.state.resort === null ? "" : this.state.resort.longest_run}</List.Item> */}
                                        <List.Item>Skiiable Acreage: {this.state.acreage}</List.Item>
                                        <List.Item>Terrain Park: {this.state.terrain_park}</List.Item>
                                        <List.Item>Night Skiing: {this.state.night_skiing}</List.Item>
                                        <List.Item>Highest Elevation: {this.state.top_el} meters</List.Item>
                                        <List.Item>Base: {this.state.base_el} meters</List.Item>
                                        <List.Item><a href={this.state.website} target='_blank'>More Information</a></List.Item>
                                    </List>
                                    {/* <Modal size='large' trigger={<Button>Larger Map</Button>}>
                                        <Image  size='massive' src={this.state.modal_img}/>
                                        <Document file={this.state.modal_img} >
                                            <Page pageNumber={1}/>
                                        </Document>
                                    </Modal> */}
                                    {/* modal needs to be fixed */}
                                </Segment>
                        </Segment.Group>
                </Grid>
            </div>
        )
    }
}

