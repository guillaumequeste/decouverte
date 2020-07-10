import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

export default class CarteSeine extends Component {
    state = {
        lat: 49.3,
        lng: 1.1,
        zoom: 9,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        const barrage_poses = [49.31016932741239, 1.2364600137390047]
        const le_plessis = [49.30212635047978, 1.2645172895483237]
        const saint_nicolas_de_bliquetuit = [49.52091892613221, 0.7276994092058375]

        return (
            <div>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={barrage_poses}>
                        <Popup minWidth={200}>
                            <Link to="/barrage_poses" className="linkPlage"><div className="lien"><div>Barrage de Poses</div><div><img src={require('../../img/seine/barrage_poses/barrage_poses01min.jpg')} alt="barrage_poses" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={le_plessis}>
                        <Popup minWidth={200}>
                            <Link to="/le_plessis" className="linkPlage"><div className="lien"><div>Panorama du Plessis</div><div><img src={require('../../img/seine/le_plessis/le_plessis01min.jpg')} alt="le_plessis" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={saint_nicolas_de_bliquetuit}>
                        <Popup minWidth={200}>
                            <Link to="/saint-nicolas-de-bliquetuit" className="linkPlage"><div className="lien"><div>Saint-Nicolas-de-Bliquetuit</div><div><img src={require('../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit01min.jpg')} alt="saint-nicolas-de-bliquetuit" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
