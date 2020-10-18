import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

export default class CarteAutres extends Component {
    state = {
        lat: 49.5,
        lng: 1.1,
        zoom: 8,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        const abbaye_mortemer = [49.369224896866555, 1.4805959564468152]
        const abbaye_notre_dame_du_bec = [49.22953974001412, 0.720553351057176]
        const abbaye_saint_georges_boscherville = [49.44422912597656, 0.9642863273620605]
        const auvers_sur_oise = [49.0701875, 2.1718687]
        const avenue_verte_arques = [49.874725744731734, 1.144591670209727]
        const avenue_verte_dampierre = [49.86053211973192, 1.1993901547966912]
        const avenue_verte_mesnieres = [49.76121475529929, 1.378964622259904]
        const avenue_verte_meulers = [49.849013904657475, 1.2152508596926648]
        const avenue_verte_osmoy = [49.79444326324918, 1.3227432047380594]
        const avenue_verte_saint_aubin_le_cauf = [49.867832893705945, 1.1776762445261735]
        const avenue_verte_saint_vaast = [49.81910677943631, 1.2588236235701933]
        const basilique_lisieux = [49.139556789525805, 0.23629679734376907]
        const biomarine = [49.922020903359154, 1.0719482754901533]
        const cathedrale_amiens = [49.894544762202585, 2.302213976161882]
        const cathedrale_beauvais = [49.43259468183312, 2.0813340770177735]
        const cathedrale_rouen = [49.442550390837766, 1.099799646516808]
        const chateau_chantilly = [49.19403662095672, 2.4855468818245985]
        const chateau_dieppe = [49.9246285256642, 1.070147852545782]
        const chateau_fontainebleau = [48.40181464878997, 2.69947521185792]
        const chateau_harcourt = [49.17351250829536, 0.7872275764497649]
        const chateau_pierrefonds = [49.34697909699972, 2.9799778488216466]
        const chateau_vascoeuil = [49.44667305520199, 1.3786565396338535]
        const cimetiere_des_canadiens = [49.89598399948992, 1.0678900255719181]
        const domaine_du_champ_de_bataille = [49.168025480627925, 0.8590760530616404]
        const eglise_saint_joseph = [49.49094960069601, 0.10123783788756668]
        const estran = [49.93065912643744, 1.083684613302509]
        const giverny = [49.0753489, 1.5337884]
        const gros_horloge = [49.44151701844756, 1.0912492166726517]
        const hortillonnages = [49.8948700325477, 2.3124191947304062]
        const le_bec_hellouin = [49.2312413, 0.7210184]
        const le_sentier_du_verger = [49.803514393904294, 1.1779511566367296]
        const lillebonne = [49.51799724241, 0.5367753386982388]
        const maison_jules_verne = [49.887827381264636, 2.3017851790421906]
        const manoir_ango = [49.9007992793442, 0.9949236699621933]
        const memorial = [49.92534223326355, 1.0719519517528875]
        const montreuil_sur_mer = [50.46658643355182, 1.7603227017118916]
        const musee_beaux_arts = [49.444775046574925, 1.0945558547973633]
        const musee_emma_bovary = [49.472504641012726, 1.3441478694678821]
        const panorama_evreux = [49.03194252699784, 1.147213258187909]
        const panorama_marais_vernier = [49.402871672725254, 0.4678151817346565]
        const panorama_vert_village = [49.00129340278666, 1.0921865534499275]
        const panorama_xxl = [49.442203334431795, 1.0765784564376446]
        const phare_d_ailly = [49.91589152840033, 0.9587284896833781]
        const plan_eau_canada = [49.456879473483035, 2.0559077359983613]
        const quartier_saint_leu = [49.897365617337606, 2.304579209878246]
        const varenne = [49.868665986725816, 1.1579329075862077]
        const versailles = [48.80503616157122, 2.119683843519584]

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
                    <Marker position={abbaye_notre_dame_du_bec}>
                        <Popup minWidth={200}>
                            <Link to="/abbaye_notre-dame_du_bec" className="linkPlage"><div className="lien"><div>Abbaye Notre-Dame du Bec</div><div><img src={require('../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec01min.jpg')} alt="abbaye_notre-dame_du_bec" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={abbaye_saint_georges_boscherville}>
                        <Popup minWidth={200}>
                            <Link to="/abbaye_saint_georges_boscherville" className="linkPlage"><div className="lien"><div>Abbaye Romane Saint Georges de Boscherville</div><div><img src={require('../../img/autres/abbaye_saint_georges_boscherville/abbaye_saint_georges_boschervillemin.jpg')} alt="abbaye_saint_georges_boscherville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={auvers_sur_oise}>
                        <Popup minWidth={200}>
                            <Link to="/auvers-sur-oise" className="linkPlage"><div className="lien"><div>Auvers-sur-Oise</div><div><img src={require('../../img/autres/auvers-sur-oise/auvers-sur-oise01min.jpg')} alt="auvers-sur-oise" className="apercu"/></div></div></Link>
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
                    <Marker position={basilique_lisieux}>
                        <Popup minWidth={200}>
                            <Link to="/basilique_lisieux" className="linkPlage"><div className="lien"><div>Basilique Sainte-Thérèse de Lisieux</div><div><img src={require("../../img/autres/basilique_lisieux/basilique_lisieux01min.jpg")} alt="basilique_lisieux01" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={biomarine}>
                        <Popup minWidth={200}>
                            <Link to="/biomarine" className="linkPlage"><div className="lien"><div>Biomarine</div><div><img src={require("../../img/autres/biomarine/biomarine01min.jpg")} alt="biomarine01" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={cathedrale_amiens}>
                        <Popup minWidth={200}>
                            <Link to="/cathedrale_amiens" className="linkPlage"><div className="lien"><div>Cathédrale Notre-Dame d'Amiens</div><div><img src={require("../../img/autres/cathedrale_amiens/cathedrale_amiens01min.jpg")} alt="cathedrale_amiens01" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={cathedrale_beauvais}>
                        <Popup minWidth={200}>
                            <Link to="/cathedrale_beauvais" className="linkPlage"><div className="lien"><div>Cathédrale Saint-Pierre de Beauvais</div><div><img src={require("../../img/autres/cathedrale_beauvais/cathedrale_beauvais01min.jpg")} alt="cathedrale_beauvais01" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={cathedrale_rouen}>
                        <Popup minWidth={200}>
                            <Link to="/cathedrale_rouen" className="linkPlage"><div className="lien"><div>Cathédrale Notre-Dame de Rouen</div><div><img src={require("../../img/autres/cathedrale_rouen/cathedrale_rouen01.jpg")} alt="cathedrale_rouen01" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_chantilly}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_chantilly" className="linkPlage"><div className="lien"><div>Château de Chantilly</div><div><img src={require("../../img/autres/chateau_chantilly/chateau_chantillymin.jpg")} alt="chateau_chantilly" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_dieppe}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_dieppe" className="linkPlage"><div className="lien"><div>Château de Dieppe</div><div><img src={require("../../img/autres/chateau_dieppe/chateau_dieppemin.jpg")} alt="chateau_dieppe" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_fontainebleau}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_fontainebleau" className="linkPlage"><div className="lien"><div>Château de Fontainebleau</div><div><img src={require("../../img/autres/chateau_fontainebleau/chateau_fontainebleau01min.jpg")} alt="chateau_fontainebleau" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_harcourt}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_harcourt" className="linkPlage"><div className="lien"><div>Château d'Harcourt</div><div><img src={require("../../img/autres/chateau_harcourt/chateau_harcourtmin.jpg")} alt="chateau_harcourt" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={chateau_pierrefonds}>
                        <Popup minWidth={200}>
                            <Link to="/chateau_pierrefonds" className="linkPlage"><div className="lien"><div>Château de Pierrefonds</div><div><img src={require("../../img/autres/chateau_pierrefonds/chateau_pierrefonds.jpg")} alt="chateau_pierrefonds" className="apercu"/></div></div></Link>
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
                    <Marker position={eglise_saint_joseph}>
                        <Popup minWidth={200}>
                            <Link to="/eglise_saint-joseph" className="linkPlage"><div className="lien"><div>Eglise Saint-Joseph du Havre</div><div><img src={require('../../img/autres/eglise_saint-joseph/eglise_saint-joseph01min.jpg')} alt="eglise_saint-joseph" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={estran}>
                        <Popup minWidth={200}>
                            <Link to="/estran" className="linkPlage"><div className="lien"><div>Estran Cité de la Mer</div><div><img src={require('../../img/autres/estran/estran.jpeg')} alt="estran" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={giverny}>
                        <Popup minWidth={200}>
                            <Link to="/giverny" className="linkPlage"><div className="lien"><div>Fondation Claude Monet (Giverny)</div><div><img src={require('../../img/autres/giverny/giverny.jpg')} alt="giverny" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={gros_horloge}>
                        <Popup minWidth={200}>
                            <Link to="/gros-horloge" className="linkPlage"><div className="lien"><div>Le Gros-Horloge à Rouen</div><div><img src={require('../../img/autres/gros-horloge/gros-horlogemin.jpg')} alt="gros-horloge" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={hortillonnages}>
                        <Popup minWidth={200}>
                            <Link to="/hortillonnages" className="linkPlage"><div className="lien"><div>Hortillonnages d'Amiens</div><div><img src={require("../../img/autres/hortillonnages/hortillonnages01min.jpg")} alt="hortillonnages" className="apercu"/></div></div></Link>
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
                    <Marker position={lillebonne}>
                        <Popup minWidth={200}>
                            <Link to="/lillebonne" className="linkPlage"><div className="lien"><div>Théâtre romain de Lillebonne</div><div><img src={require('../../img/autres/lillebonne/lillebonne01min.jpg')} alt="lillebonne" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={maison_jules_verne}>
                        <Popup minWidth={200}>
                            <Link to="/maison_jules_verne" className="linkPlage"><div className="lien"><div>Maison de Jules Verne</div><div><img src={require('../../img/autres/maison_jules_verne/maison_jules_verne01min.jpg')} alt="maison_jules_verne" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={manoir_ango}>
                        <Popup minWidth={200}>
                            <Link to="/manoir_ango" className="linkPlage"><div className="lien"><div>Manoir d'Ango</div><div><img src={require("../../img/autres/manoir_ango/manoir_ango.jpeg")} alt="manoir_ango" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={memorial}>
                        <Popup minWidth={200}>
                            <Link to="/memorial" className="linkPlage"><div className="lien"><div>Mémorial du 19 août 1942</div><div><img src={require('../../img/autres/memorial/memorial01min.jpg')} alt="memorial" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={montreuil_sur_mer}>
                        <Popup minWidth={200}>
                            <Link to="/montreuil-sur-mer" className="linkPlage"><div className="lien"><div>Montreuil-sur-Mer</div><div><img src={require('../../img/autres/montreuil-sur-mer/montreuil-sur-mer01min.jpg')} alt="montreuil-sur-mer" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={musee_beaux_arts}>
                        <Popup minWidth={200}>
                            <Link to="/musee_beaux_arts" className="linkPlage"><div className="lien"><div>Musée des Beaux Arts</div><div><img src={require('../../img/autres/musee_beaux_arts/musee_beaux_arts01min.jpg')} alt="musee_beaux_arts" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={musee_emma_bovary}>
                        <Popup minWidth={200}>
                            <Link to="/musee_emma_bovary" className="linkPlage"><div className="lien"><div>Galerie Bovary - Musée d'automates</div><div><img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary01min.jpg")} alt="musee_emma_bovary" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={panorama_evreux}>
                        <Popup minWidth={200}>
                            <Link to="/panorama_evreux" className="linkPlage"><div className="lien"><div>Panorama d'Evreux</div><div><img src={require("../../img/autres/panorama_evreux/panorama_evreux01min.jpg")} alt="panorama_evreux" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={panorama_marais_vernier}>
                        <Popup minWidth={200}>
                            <Link to="/panorama_marais_vernier" className="linkPlage"><div className="lien"><div>Panorama du Marais Vernier</div><div><img src={require('../../img/autres/panorama_marais_vernier/panorama_marais_vernier01min.jpg')} alt="panorama_marais_vernier" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={panorama_vert_village}>
                        <Popup minWidth={200}>
                            <Link to="/panorama_vert_village" className="linkPlage"><div className="lien"><div>Panorama du Vert Village</div><div><img src={require('../../img/autres/panorama_vert_village/panorama_vert_village01min.jpg')} alt="panorama_vert_village" className="apercu"/></div></div></Link>
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
                    <Marker position={plan_eau_canada}>
                        <Popup minWidth={200}>
                            <Link to="/plan_eau_canada" className="linkPlage"><div className="lien"><div>Plan d'eau du Canada</div><div><img src={require("../../img/autres/plan_eau_canada/plan_eau_canada01min.jpg")} alt="plan_eau_canada" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={quartier_saint_leu}>
                        <Popup minWidth={200}>
                            <Link to="/quartier_saint-leu" className="linkPlage"><div className="lien"><div>Quartier Saint-Leu</div><div><img src={require("../../img/autres/quartier_saint-leu/quartier_saint-leu01min.jpg")} alt="quartier_saint-leu" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={varenne}>
                        <Popup minWidth={200}>
                            <Link to="/varenne" className="linkPlage"><div className="lien"><div>La Varenne</div><div><img src={require("../../img/autres/varenne/varenne01min.jpg")} alt="varenne" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={versailles}>
                        <Popup minWidth={200}>
                            <Link to="/versailles" className="linkPlage"><div className="lien"><div>Château de Versailles</div><div><img src={require("../../img/autres/versailles/versailles01min.jpg")} alt="versailles" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
