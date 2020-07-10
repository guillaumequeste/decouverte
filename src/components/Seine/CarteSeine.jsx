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
        const bennecourt = [49.041242, 1.560926]
        const caudebec = [49.52416135852367, 0.7263719063849283]
        const le_plessis = [49.30212635047978, 1.2645172895483237]
        const notre_dame_de_bliquetuit = [49.49294918557146, 0.7712008905530077]
        const port_mort = [49.16899232754176, 1.3942056070488862]
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
                    <Marker position={bennecourt}>
                        <Popup minWidth={200}>
                            <Link to="/bennecourt" className="linkPlage"><div className="lien"><div>Bennecourt</div><div><img src={require('../../img/seine/bennecourt/bennecourt01min.jpg')} alt="bennecourt" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={caudebec}>
                        <Popup minWidth={200}>
                            <Link to="/caudebec" className="linkPlage"><div className="lien"><div>Caudebec-en-Caux</div><div><img src={require('../../img/seine/caudebec/caudebec01min.jpg')} alt="caudebec" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={le_plessis}>
                        <Popup minWidth={200}>
                            <Link to="/le_plessis" className="linkPlage"><div className="lien"><div>Panorama du Plessis</div><div><img src={require('../../img/seine/le_plessis/le_plessis01min.jpg')} alt="le_plessis" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={notre_dame_de_bliquetuit}>
                        <Popup minWidth={200}>
                            <Link to="/notre-dame-de-bliquetuit" className="linkPlage"><div className="lien"><div>Notre-Dame-de-Bliquetuit</div><div><img src={require('../../img/seine/notre-dame-de-bliquetuit/notre-dame-de-bliquetuit01min.jpg')} alt="notre-dame-de-bliquetuit" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={port_mort}>
                        <Popup minWidth={200}>
                            <Link to="/port-mort" className="linkPlage"><div className="lien"><div>Port-Mort</div><div><img src={require('../../img/seine/port-mort/port-mort01min.jpg')} alt="port-mort" className="apercu"/></div></div></Link>
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
