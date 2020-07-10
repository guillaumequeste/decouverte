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
        const cleon = [49.3142135, 1.0329344]
        const duclair = [49.482563, 0.8754968]
        const hautot = [49.3602514, 0.9773356]
        const heurteauville = [49.444798, 0.8128955]
        const jumieges = [49.4317826, 0.8175572]
        const la_mailleray_sur_seine = [49.48230701294539, 0.7747897018168937]
        const la_roche_guyon = [49.0810715, 1.6305766]
        const le_mesnil_sous_jumieges = [49.4124195, 0.8576236]
        const le_plessis = [49.30212635047978, 1.2645172895483237]
        const le_val_pitant = [49.30959482502866, 1.2485836639375236]
        const les_andelys = [49.2469193, 1.4215534]
        const les_mousseaux = [49.19813000943054, 1.34611101749738]
        const limetz_villez = [49.06031467107532, 1.5291453092289942]
        const notre_dame_de_bliquetuit = [49.49294918557146, 0.7712008905530077]
        const port_mort = [49.16899232754176, 1.3942056070488862]
        const saint_nicolas_de_bliquetuit = [49.52091892613221, 0.7276994092058375]
        const saint_pierre_de_manneville = [49.37659117448786, 0.9195194617895686]
        const val_de_la_haye = [49.3773661, 1.0010383]

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
                    <Marker position={cleon}>
                        <Popup minWidth={200}>
                            <Link to="/cleon" className="linkPlage"><div className="lien"><div>Cléon</div><div><img src={require('../../img/seine/cleon/cleon01min.jpg')} alt="cleon" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={duclair}>
                        <Popup minWidth={200}>
                            <Link to="/duclair" className="linkPlage"><div className="lien"><div>Duclair</div><div><img src={require('../../img/seine/duclair/duclair01min.jpg')} alt="duclair" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={hautot}>
                        <Popup minWidth={200}>
                            <Link to="/hautot" className="linkPlage"><div className="lien"><div>Hautot-sur-Seine</div><div><img src={require('../../img/seine/hautot/hautot01min.jpg')} alt="hautot" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={heurteauville}>
                        <Popup minWidth={200}>
                            <Link to="/heurteauville" className="linkPlage"><div className="lien"><div>Heurteauville</div><div><img src={require('../../img/seine/heurteauville/heurteauville01min.jpg')} alt="heurteauville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={jumieges}>
                        <Popup minWidth={200}>
                            <Link to="/jumieges" className="linkPlage"><div className="lien"><div>Jumièges</div><div><img src={require('../../img/seine/jumieges/jumieges01min.jpg')} alt="jumieges" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={la_mailleray_sur_seine}>
                        <Popup minWidth={200}>
                            <Link to="/la_mailleray-sur-seine" className="linkPlage"><div className="lien"><div>La Mailleray-sur-Seine</div><div><img src={require('../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine01min.jpg')} alt="la_mailleray-sur-seine" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={la_roche_guyon}>
                        <Popup minWidth={200}>
                            <Link to="/la_roche-guyon" className="linkPlage"><div className="lien"><div>La Roche-Guyon</div><div><img src={require('../../img/seine/la_roche-guyon/la_roche-guyon01min.jpg')} alt="la_roche-guyon" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={le_mesnil_sous_jumieges}>
                        <Popup minWidth={200}>
                            <Link to="/le_mesnil-sous-jumieges" className="linkPlage"><div className="lien"><div>Le Mesnil-sous-Jumièges</div><div><img src={require('../../img/seine/le_mesnil-sous-jumieges/le_mesnil-sous-jumieges01min.jpg')} alt="le_mesnil-sous-jumieges" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={le_plessis}>
                        <Popup minWidth={200}>
                            <Link to="/le_plessis" className="linkPlage"><div className="lien"><div>Panorama du Plessis</div><div><img src={require('../../img/seine/le_plessis/le_plessis01min.jpg')} alt="le_plessis" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={le_val_pitant}>
                        <Popup minWidth={200}>
                            <Link to="/le_val_pitant" className="linkPlage"><div className="lien"><div>Le Val Pitant</div><div><img src={require('../../img/seine/le_val_pitant/le_val_pitant01min.jpg')} alt="le_val_pitant" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={les_andelys}>
                        <Popup minWidth={200}>
                            <Link to="/les_andelys" className="linkPlage"><div className="lien"><div>Les Andelys</div><div><img src={require('../../img/seine/les_andelys/les_andelys01min.jpg')} alt="les_andelys" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={les_mousseaux}>
                        <Popup minWidth={200}>
                            <Link to="/les_mousseaux" className="linkPlage"><div className="lien"><div>Les Mousseaux</div><div><img src={require('../../img/seine/les_mousseaux/les_mousseaux01min.jpg')} alt="les_mousseaux" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={limetz_villez}>
                        <Popup minWidth={200}>
                            <Link to="/limetz-villez" className="linkPlage"><div className="lien"><div>Limetz-Villez</div><div><img src={require('../../img/seine/limetz-villez/limetz-villez01min.jpg')} alt="limetz-villez" className="apercu"/></div></div></Link>
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
                    <Marker position={saint_pierre_de_manneville}>
                        <Popup minWidth={200}>
                            <Link to="/saint-pierre-de-manneville" className="linkPlage"><div className="lien"><div>Saint-Pierre-de-Manneville</div><div><img src={require('../../img/seine/saint-pierre-de-manneville/saint-pierre-de-manneville01min.jpg')} alt="saint-pierre-de-manneville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={val_de_la_haye}>
                        <Popup minWidth={200}>
                            <Link to="/val-de-la-haye" className="linkPlage"><div className="lien"><div>Val-de-la-Haye</div><div><img src={require('../../img/seine/val-de-la-haye/val-de-la-haye01min.jpg')} alt="val-de-la-haye" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
