import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

export default class CarteLittoral extends Component {
    state = {
        lat: 50,
        lng: 1.1,
        zoom: 8,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        const ault = [50.1015635, 1.4473006]
        const baie = [50.2125115163148, 1.6683178464456194]
        const belleville = [49.9476778, 1.1637398]
        const berneval = [49.9572664, 1.1888108]
        const boulogne = [50.7259985, 1.6118771]
        const criel = [50.0160928, 1.3139444]
        const dieppe = [49.9246182, 1.0791444]
        const equihen = [50.679393, 1.5716648]
        const etaples = [50.5139552, 1.6386252]
        const etretat = [49.7074621, 0.2031905]
        const fecamp = [49.7577729, 0.374891]

        return (
            <div className="carteLittoral">
               
                    <Map center={position} zoom={this.state.zoom}>
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={ault}>
                            <Popup minWidth={200}>
                                <Link to="/ault" className="linkPlage"><div className="lien"><div>Ault</div><div><img src={require('../../img/littoral/ault/ault01min.jpg')} alt="ault" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={baie}>
                            <Popup minWidth={200}>
                                <Link to="/baie_de_somme" className="linkPlage"><div className="lien"><div>Baie de Somme</div><div><img src={require('../../img/littoral/baie/baie01min.jpg')} alt="baie" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={belleville}>
                            <Popup minWidth={200}>
                                <Link to="/belleville-sur-mer" className="linkPlage"><div className="lien"><div>Belleville-sur-Mer</div><div><img src={require('../../img/littoral/belleville/belleville01min.jpg')} alt="belleville" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={berneval}>
                            <Popup minWidth={200}>
                                <Link to="/berneval" className="linkPlage"><div className="lien"><div>Berneval</div><div><img src={require('../../img/littoral/berneval/berneval01min.jpg')} alt="berneval" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={boulogne}>
                            <Popup minWidth={200}>
                                <Link to="/boulogne" className="linkPlage"><div className="lien"><div>Boulogne-sur-Mer</div><div><img src={require('../../img/littoral/boulogne/boulogne01min.jpg')} alt="boulogne" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={criel}>
                            <Popup minWidth={200}>
                                <Link to="/criel" className="linkPlage"><div className="lien"><div>Criel-sur-Mer</div><div><img src={require('../../img/littoral/criel/criel01min.jpg')} alt="criel" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={dieppe}>
                            <Popup minWidth={200}>
                                <Link to="/dieppe" className="linkHippodrome"><div className="lien"><div>Dieppe</div><div><img src={require('../../img/littoral/dieppe/dieppe01min.jpg')} alt="dieppe" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={equihen}>
                            <Popup minWidth={200}>
                                <Link to="/equihen" className="linkHippodrome"><div className="lien"><div>Equihen-Plage</div><div><img src={require('../../img/littoral/equihen/equihen01min.jpg')} alt="equihen" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={etaples}>
                            <Popup minWidth={200}>
                                <Link to="/etaples" className="linkHippodrome"><div className="lien"><div>Etaples</div><div><img src={require('../../img/littoral/etaples/etaples01min.jpg')} alt="etaples" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={etretat}>
                            <Popup minWidth={200}>
                                <Link to="/etretat" className="linkHippodrome"><div className="lien"><div>Etretat</div><div><img src={require('../../img/littoral/etretat/etretat01min.jpg')} alt="etretat" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={fecamp}>
                            <Popup minWidth={200}>
                                <Link to="/fecamp" className="linkHippodrome"><div className="lien"><div>Fécamp</div><div><img src={require('../../img/littoral/fecamp/fecamp01min.jpg')} alt="fecamp" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                    </Map>
              
            </div>
        )
    }
}
