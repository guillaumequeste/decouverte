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
        const cimetiere_des_canadiens = [49.89598399948992, 1.0678900255719181]
        const domaine_du_champ_de_bataille = [49.168025480627925, 0.8590760530616404]
        const gros_horloge = [49.44151701844756, 1.0912492166726517]
        const le_bec_hellouin = [49.2312413, 0.7210184]
        const le_sentier_du_verger = [49.803514393904294, 1.1779511566367296]
        const memorial = [49.92534223326355, 1.0719519517528875]
        const musee_emma_bovary = [49.472504641012726, 1.3441478694678821]
        const panorama_xxl = [49.442203334431795, 1.0765784564376446]
        const phare_d_ailly = [49.91589152840033, 0.9587284896833781]
        const varenne = [49.868665986725816, 1.1579329075862077]

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
                            <Link to="/avenue_verte_arques" className="linkPlage"><div className="lien"><div>Avenue verte Arques-la-Bataille</div><div><img src={require('../../img/autres/avenue_verte_arques/avenue_verte_arques01min.jpg')} alt="avenue_verte_arques" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={avenue_verte_dampierre}>
                        <Popup minWidth={200}>
                            <Link to="/avenue_verte_dampierre" className="linkPlage"><div className="lien"><div>Avenue verte Dampierre-Saint-Nicolas</div><div><img src={require('../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre01min.jpg')} alt="avenue_verte_dampierre" className="apercu"/></div></div></Link>
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
                            <Link to="/chateau_harcourt" className="linkPlage"><div className="lien"><div>Château d'Harcourt</div><div><img src={require("../../img/autres/chateau_harcourt/chateau_harcourtmin.jpg")} alt="chateau_harcourt" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_vascoeuil}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_vascoeuil" className="linkPlage"><div className="lien"><div>Château de Vascoeuil</div><div><img src={require('../../img/autres/chateau_vascoeuil/chateau_vascoeuilmin.jpg')} alt="chateau_vascoeuil" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={cimetiere_des_canadiens}>
                        <Popup minWidth={200}>
                            <Link to="/cimetiere_des_canadiens" className="linkPlage"><div className="lien"><div>Cimetière des Canadiens</div><div><img src={require('../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens01min.jpg')} alt="cimetiere_des_canadiens" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={domaine_du_champ_de_bataille}>
                        <Popup minWidth={200}>
                            <Link to="/domaine_du_champ_de_bataille" className="linkPlage"><div className="lien"><div>Domaine du Champ de Bataille</div><div><img src={require('../../img/autres/domaine_du_champ_de_bataille/domaine_du_champ_de_bataillemin.jpg')} alt="domaine_du_champ_de_bataille" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={gros_horloge}>
                        <Popup minWidth={200}>
                            <Link to="/gros-horloge" className="linkPlage"><div className="lien"><div>Le Gros-Horloge</div><div><img src={require('../../img/autres/gros-horloge/gros-horlogemin.jpg')} alt="gros-horloge" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={le_bec_hellouin}>
                        <Popup minWidth={200}>
                            <Link to="/le_bec-hellouin" className="linkPlage"><div className="lien"><div>Le Bec-Hellouin</div><div><img src={require('../../img/autres/le_bec-hellouin/le_bec-hellouin01min.jpg')} alt="e_bec-hellouin" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={le_sentier_du_verger}>
                        <Popup minWidth={200}>
                            <Link to="/le_sentier_du_verger" className="linkPlage"><div className="lien"><div>Le Sentier du Verger</div><div><img src={require('../../img/autres/le_sentier_du_verger/le_sentier_du_verger01min.jpg')} alt="le_sentier_du_verger" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={memorial}>
                        <Popup minWidth={200}>
                            <Link to="/memorial" className="linkPlage"><div className="lien"><div>Mémorial du 19 août 1942</div><div><img src={require('../../img/autres/memorial/memorial01min.jpg')} alt="memorial" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={musee_emma_bovary}>
                        <Popup minWidth={200}>
                            <Link to="/musee_emma_bovary" className="linkPlage"><div className="lien"><div>Galerie Bovary - Musée d'automates</div><div><img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary01min.jpg")} alt="musee_emma_bovary" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={panorama_xxl}>
                        <Popup minWidth={200}>
                            <Link to="/panorama_xxl" className="linkPlage"><div className="lien"><div>Panorama XXL</div><div><img src={require('../../img/autres/panorama_xxl/panorama_xxlmin.jpg')} alt="panorama_xxl" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={phare_d_ailly}>
                        <Popup minWidth={200}>
                            <Link to="/phare_d_ailly" className="linkPlage"><div className="lien"><div>Phare d'Ailly</div><div><img src={require("../../img/autres/phare_d_ailly/phare_d_ailly01min.jpg")} alt="phare_d_ailly" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={varenne}>
                        <Popup minWidth={200}>
                            <Link to="/varenne" className="linkPlage"><div className="lien"><div>La Varenne</div><div><img src={require("../../img/autres/varenne/varenne01min.jpg")} alt="varenne" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
