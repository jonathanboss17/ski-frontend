import React from 'react'; 
import ReactDOM from 'react-dom'
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker, Markers } from "react-simple-maps";
import {geoAlbersUsa} from "d3-geo";



// const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const geoMap = require('/Users/jboss/Flatiron/Mod5/Final Project/ski-frontend/src/gadm36_USA.json')
// const markers = [
//     {
//       markerOffset: -30,
//       name: "Buenos Aires",
//       coordinates: [-58.3816, -34.6037]
//     },
//     { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
//     { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
//     { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
//     { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
//     { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
//     { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
//     { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
//     { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
//     { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
//     { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
//     { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
//   ];

export default class Map extends React.Component {

    render() {
        return (
            <div className="map-container">
                <ComposableMap projection={geoAlbersUsa} projectionConfig={{ scale: 1000 }} width={980} height={551} style={{width: "100%", height: "auto"}}>
                    {/* <ZoomableGroup center={[ -97, 40 ]} disablePanning> */}
                        <Geographies geography={JSON.stringify(geoMap)}>
                            {({geographies}) => 
                                geographies.map((geography, i) => <Geography key={i} geography={geography}  
                                style={ {default: {fill: "red", stroke: "#607D8B", strokeWidth: 0.75, outline: "none"}, hover: {fill: "#CFD8DC", stroke: "#607D8B", strokeWidth: 1, outline: "none"}, pressed: {fill: "#FF5722", stroke: "#607D8B", strokeWidth: 1, outline: "none"}} }
                                />)
                            }
                        </Geographies>
                    {/* </ZoomableGroup>  */}
                </ComposableMap>
            </div>
        )
    }
}

