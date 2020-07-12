import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

export default class CarteAutres extends Component {
    state = {
        lat: 49.3,
        lng: 1.1,
        zoom: 8,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        const abbaye_mortemer = [49.369224896866555, 1.4805959564468152]
        const abbaye_saint_georges_boscherville = [49.44422912597656, 0.9642863273620605]
        const avenue_verte_arques = [49.874725744731734, 1.144591670209727]
        const avenue_verte_dampierre = [49.86053211973192, 1.1993901547966912]
        const avenue_verte_mesnieres = [49.76121475529929, 1.378964622259904]
        const avenue_verte_meulers = [49.849013904657475, 1.2152508596926648]
        const avenue_verte_osmoy = [49.79444326324918, 1.3227432047380594]
        const avenue_verte_saint_aubin_le_cauf = [49.867832893705945, 1.1776762445261735]
        const avenue_verte_saint_vaast = [49.81910677943631, 1.2588236235701933]
        const chateau_harcourt = [49.17351250829536, 0.7872275764497649]
        const chateau_vascoeuil = [49.44667305520199, 1.3786565396338535]

        return (
            <div>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={abbaye_mortemer}>
                        <Popup minWidth={200}>
                            <Link to="/abbaye_mortemer" className="linkPlage"><div className="lien"><div>Abbaye de Mortemer</div><div><img src={require('../../img/autres/abbaye_mortemer/abbaye_mortemermin.jpg')} alt="abbaye_mortemer" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={abbaye_saint_georges_boscherville}>
                        <Popup minWidth={200}>
                            <Link to="/abbaye_saint_georges_boscherville" className="linkPlage"><div className="lien"><div>Abbaye Romane Saint Georges de Boscherville</div><div><img src={require('../../img/autres/abbaye_saint_georges_boscherville/abbaye_saint_georges_boschervillemin.jpg')} alt="abbaye_saint_georges_boscherville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_arques}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_arques" className="linkPlage"><div className="lien"><div>Abbaye verte Arques-la-Bataille</div><div><img src={require('../../img/autres/avenue_verte_arques/avenue_verte_arques01min.jpg')} alt="avenue_verte_arques" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_dampierre}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_dampierre" className="linkPlage"><div className="lien"><div>Abbaye verte Dampierre-Saint-Nicolas</div><div><img src={require('../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre01min.jpg')} alt="avenue_verte_dampierre" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_mesnieres}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_mesnieres" className="linkPlage"><div className="lien"><div>Avenue verte Mesnières-en-Bray</div><div><img src={require('../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres01min.jpg')} alt="avenue_verte_mesnieres" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_meulers}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_meulers" className="linkPlage"><div className="lien"><div>Avenue verte Meulers</div><div><img src={require('../../img/autres/avenue_verte_meulers/avenue_verte_meulers01min.jpg')} alt="avenue_verte_meulers" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_osmoy}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_osmoy" className="linkPlage"><div className="lien"><div>Avenue verte Osmoy-Saint-Valéry</div><div><img src={require('../../img/autres/avenue_verte_osmoy/avenue_verte_osmoy01min.jpg')} alt="avenue_verte_osmoy" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_saint_aubin_le_cauf}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_saint-aubin-le-cauf" className="linkPlage"><div className="lien"><div>Avenue verte Saint-Aubin-le-Cauf</div><div><img src={require('../../img/autres/avenue_verte_saint-aubin-le-cauf/avenue_verte_saint-aubin-le-cauf01min.jpg')} alt="avenue_verte_saint-aubin-le-cauf" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_saint_vaast}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_saint-vaast" className="linkPlage"><div className="lien"><div>Avenue verte Saint-Vaast-d'Equiqueville</div><div><img src={require('../../img/autres/avenue_verte_saint-vaast/avenue_verte_saint-vaast01min.jpg')} alt="avenue_verte_saint-vaast" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_harcourt}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_harcourt" className="linkPlage"><div className="lien"><div>Château d'Harcourt</div><div><img src={require('../../img/autres/chateau_harcourt/chateau_harcourtmin.jpg')} alt="chateau_harcourt" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_vascoeuil}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_vascoeuil" className="linkPlage"><div className="lien"><div>Château de Vascoeuil</div><div><img src={require('../../img/autres/chateau_vascoeuil/chateau_vascoeuilmin.jpg')} alt="chateau_vascoeuil" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
