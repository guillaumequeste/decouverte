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
        const aizier = [49.431928407877166, 0.6245415669635257]
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
        const la_roquette = [49.25060354040053, 1.3518886396638718]
        const la_vacquerie = [49.44729478584017, 0.652205264487602]
        const le_mesnil_sous_jumieges = [49.4124195, 0.8576236]
        const le_plessis = [49.30212635047978, 1.2645172895483237]
        const le_thuit = [49.254447617943185, 1.376624308241885]
        const le_val_pitant = [49.30959482502866, 1.2485836639375236]
        const les_andelys = [49.2469193, 1.4215534]
        const les_mousseaux = [49.19813000943054, 1.34611101749738]
        const limetz_villez = [49.06031467107532, 1.5291453092289942]
        const notre_dame_de_bliquetuit = [49.49294918557146, 0.7712008905530077]
        const notre_dame_de_l_isle = [49.1455113, 1.4277246]
        const passage_du_trait = [49.466176205756646, 0.811326038830531]
        const passage_d_yssainville = [49.456570881392274, 0.8152271590618643]
        const phare_de_la_roque = [49.44387280261981, 0.4251056914048146]
        const port_jerome = [49.472651189507765, 0.5354173653879579]
        const port_jumieges = [49.43748167827217, 0.8038979890403919]
        const port_mort = [49.16899232754176, 1.3942056070488862]
        const quillebeuf = [49.470337430065115, 0.5301951339102651]
        const rouen = [49.4404591, 1.0939658]
        const sahurs = [49.3586705, 0.9437092]
        const saint_aubin_les_elbeuf = [49.29435810837388, 1.0154206793338627]
        const saint_maur = [49.35375598710399, 0.9542156965897641]
        const saint_nicolas_de_bliquetuit = [49.52091892613221, 0.7276994092058375]
        const saint_paul = [49.46908930819602, 0.8605530137303674]
        const saint_pierre_de_manneville = [49.37659117448786, 0.9195194617895686]
        const tancarville = [49.48139170731105, 0.47487084026760495]
        const val_de_la_haye = [49.3773661, 1.0010383]
        const vatteville = [49.49712555659109, 0.6714457248089811]
        const vernon = [49.09761619380803, 1.4884821158460415]
        const vieux_port = [49.42689869574646, 0.6100424316636621]
        const villequier = [49.51442113762259, 0.6767299273563898]

        return (
            <div>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={aizier}>
                        <Popup minWidth={200}>
                            <Link to="/aizier" className="linkPlage"><div className="lien"><div>Aizier</div><div><img src={require('../../img/seine/aizier/aizier01min.jpg')} alt="aizier" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
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
                    <Marker position={la_roquette}>
                        <Popup minWidth={200}>
                            <Link to="/la_roquette" className="linkPlage"><div className="lien"><div>La Roquette</div><div><img src={require('../../img/seine/la_roquette/la_roquette01min.jpg')} alt="la_roquette" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={la_vacquerie}>
                        <Popup minWidth={200}>
                            <Link to="/la_vacquerie" className="linkPlage"><div className="lien"><div>La Vacquerie</div><div><img src={require('../../img/seine/la_vacquerie/la_vacquerie01min.jpg')} alt="la_vacquerie" className="apercu"/></div></div></Link>
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
                    <Marker position={le_thuit}>
                        <Popup minWidth={200}>
                            <Link to="/le_thuit" className="linkPlage"><div className="lien"><div>Panorama du Thuit</div><div><img src={require('../../img/seine/le_thuit/le_thuit01min.jpg')} alt="le_thuit" className="apercu"/></div></div></Link>
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
                    <Marker position={notre_dame_de_l_isle}>
                        <Popup minWidth={200}>
                            <Link to="/notre-dame-de-l_isle" className="linkPlage"><div className="lien"><div>Notre-Dame-de-l'Isle</div><div><img src={require('../../img/seine/notre-dame-de-l_isle/notre-dame-de-l_isle01min.jpg')} alt="notre-dame-de-l_isle" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={passage_du_trait}>
                        <Popup minWidth={200}>
                            <Link to="/passage_du_trait" className="linkPlage"><div className="lien"><div>Passage du Trait</div><div><img src={require('../../img/seine/passage_du_trait/passage_du_trait01min.jpg')} alt="passage_du_trait" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={passage_d_yssainville}>
                        <Popup minWidth={200}>
                            <Link to="/passage_d_yssainville" className="linkPlage"><div className="lien"><div>Passage d'Yssainville</div><div><img src={require('../../img/seine/passage_d_yssainville/passage_d_yssainville01min.jpg')} alt="passage_d_yssainville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={phare_de_la_roque}>
                        <Popup minWidth={200}>
                            <Link to="/phare_de_la_roque" className="linkPlage"><div className="lien"><div>Phare de la Roque</div><div><img src={require('../../img/seine/phare_de_la_roque/phare_de_la_roque01min.jpg')} alt="phare_de_la_roque" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={port_jerome}>
                        <Popup minWidth={200}>
                            <Link to="/port-jerome" className="linkPlage"><div className="lien"><div>Port-Jérôme-sur-Seine</div><div><img src={require('../../img/seine/port-jerome/port-jerome01min.jpg')} alt="port-jerome" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={port_jumieges}>
                        <Popup minWidth={200}>
                            <Link to="/port_jumieges" className="linkPlage"><div className="lien"><div>Port Jumièges</div><div><img src={require('../../img/seine/port_jumieges/port_jumieges01min.jpg')} alt="port_jumieges" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={port_mort}>
                        <Popup minWidth={200}>
                            <Link to="/port-mort" className="linkPlage"><div className="lien"><div>Port-Mort</div><div><img src={require('../../img/seine/port-mort/port-mort01min.jpg')} alt="port-mort" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={quillebeuf}>
                        <Popup minWidth={200}>
                            <Link to="/quillebeuf" className="linkPlage"><div className="lien"><div>Quillebeuf-sur-Seine</div><div><img src={require('../../img/seine/quillebeuf/quillebeuf01min.jpg')} alt="quillebeuf" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={rouen}>
                        <Popup minWidth={200}>
                            <Link to="/rouen" className="linkPlage"><div className="lien"><div>Rouen</div><div><img src={require('../../img/seine/rouen/rouen01min.jpg')} alt="rouen" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={sahurs}>
                        <Popup minWidth={200}>
                            <Link to="/sahurs" className="linkPlage"><div className="lien"><div>Sahurs</div><div><img src={require('../../img/seine/sahurs/sahurs01min.jpg')} alt="sahurs" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={saint_aubin_les_elbeuf}>
                        <Popup minWidth={200}>
                            <Link to="/saint-aubin-les-elbeuf" className="linkPlage"><div className="lien"><div>Saint-Aubin-lès-Elbeuf</div><div><img src={require('../../img/seine/saint-aubin-les-elbeuf/saint-aubin-les-elbeuf01min.jpg')} alt="saint-aubin-les-elbeuf" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={saint_maur}>
                        <Popup minWidth={200}>
                            <Link to="/saint-maur" className="linkPlage"><div className="lien"><div>Saint-Maur</div><div><img src={require('../../img/seine/saint-maur/saint-maur01min.jpg')} alt="saint-maur" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={saint_nicolas_de_bliquetuit}>
                        <Popup minWidth={200}>
                            <Link to="/saint-nicolas-de-bliquetuit" className="linkPlage"><div className="lien"><div>Saint-Nicolas-de-Bliquetuit</div><div><img src={require('../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit01min.jpg')} alt="saint-nicolas-de-bliquetuit" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={saint_paul}>
                        <Popup minWidth={200}>
                            <Link to="/saint-paul" className="linkPlage"><div className="lien"><div>Saint-Paul</div><div><img src={require('../../img/seine/saint-paul/saint-paul01min.jpg')} alt="saint-paul" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={saint_pierre_de_manneville}>
                        <Popup minWidth={200}>
                            <Link to="/saint-pierre-de-manneville" className="linkPlage"><div className="lien"><div>Saint-Pierre-de-Manneville</div><div><img src={require('../../img/seine/saint-pierre-de-manneville/saint-pierre-de-manneville01min.jpg')} alt="saint-pierre-de-manneville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={tancarville}>
                        <Popup minWidth={200}>
                            <Link to="/tancarville" className="linkPlage"><div className="lien"><div>Tancarville</div><div><img src={require('../../img/seine/tancarville/tancarville01min.jpg')} alt="tancarville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={val_de_la_haye}>
                        <Popup minWidth={200}>
                            <Link to="/val-de-la-haye" className="linkPlage"><div className="lien"><div>Val-de-la-Haye</div><div><img src={require('../../img/seine/val-de-la-haye/val-de-la-haye01min.jpg')} alt="val-de-la-haye" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={vatteville}>
                        <Popup minWidth={200}>
                            <Link to="/vatteville" className="linkPlage"><div className="lien"><div>Vatteville-la-Rue</div><div><img src={require('../../img/seine/vatteville/vatteville01min.jpg')} alt="vatteville" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={vernon}>
                        <Popup minWidth={200}>
                            <Link to="/vernon" className="linkPlage"><div className="lien"><div>Vernon</div><div><img src={require('../../img/seine/vernon/vernon01min.jpg')} alt="vernon" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={vieux_port}>
                        <Popup minWidth={200}>
                            <Link to="/vieux-port" className="linkPlage"><div className="lien"><div>Vieux-Port</div><div><img src={require('../../img/seine/vieux-port/vieux-port01min.jpg')} alt="vieux-port" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                    <Marker position={villequier}>
                        <Popup minWidth={200}>
                            <Link to="/villequier" className="linkPlage"><div className="lien"><div>Villequier</div><div><img src={require('../../img/seine/villequier/villequier01min.jpg')} alt="villequier" className="apercu"/></div></div></Link>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
