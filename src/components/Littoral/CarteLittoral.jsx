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
        const hardelot = [50.6338762, 1.5778096]
        const le_bois_de_cise = [50.08914499767833, 1.4244834055121158]
        const le_crotoy = [50.2165693, 1.624047]
        const le_hourdel = [50.2147829, 1.5647525]
        const le_treport = [50.0591099, 1.3827656]
        const les_grandes_dalles = [49.8172964, 0.510781]
        const les_petites_dalles = [49.8210168, 0.5251555]
        const merlimont = [50.4553061, 1.614809]
        const mers = [50.0656325, 1.3889703]
        const mesnil_val = [50.0419433, 1.3340248]
        const pourville = [49.916219, 1.0304797]
        const puys = [49.9365342, 1.117419]
        const quiberville = [49.9031626, 0.9232605]
        const saint_aubin = [49.8889942, 0.8768462]
        const spenport = [49.8069179, 0.4946787]
        const saint_valery_en_caux = [49.8597004, 0.7106831]
        const saint_valery_sur_somme = [50.1887006, 1.6279147]
        const sainte_cecile = [50.5747158, 1.5826268]
        const sainte_marguerite = [49.9088387, 0.9467867]
        const sotteville = [49.8809899, 0.8306694]
        const stella = [50.4799397, 1.577138]
        const varengeville = [49.9046335, 1.0021825]
        const veletot = [49.786164997944525, 0.43129265244890025]
        const veules = [49.8722029, 0.7990652]
        const veulettes = [49.8503223, 0.5971459]
        const vgrainval = [49.750562118454745, 0.3474143340336777]
        const wimereux = [50.7696858, 1.6118608]
        const yport = [49.7378489, 0.3133709]

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
                        <Marker position={hardelot}>
                            <Popup minWidth={200}>
                                <Link to="/hardelot" className="linkHippodrome"><div className="lien"><div>Hardelot-Plage</div><div><img src={require('../../img/littoral/hardelot/hardelot01min.jpg')} alt="hardelot" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={le_bois_de_cise}>
                            <Popup minWidth={200}>
                                <Link to="/le_bois_de_cise" className="linkHippodrome"><div className="lien"><div>Le Bois de Cise</div><div><img src={require('../../img/littoral/le_bois_de_cise/le_bois_de_cise01min.jpg')} alt="le_bois_de_cise" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={le_crotoy}>
                            <Popup minWidth={200}>
                                <Link to="/le_crotoy" className="linkHippodrome"><div className="lien"><div>Le Crotoy</div><div><img src={require('../../img/littoral/le_crotoy/le_crotoy01min.jpg')} alt="le_crotoy" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={le_hourdel}>
                            <Popup minWidth={200}>
                                <Link to="/le_hourdel" className="linkHippodrome"><div className="lien"><div>Le Hourdel</div><div><img src={require('../../img/littoral/le_hourdel/le_hourdel01min.jpg')} alt="le_hourdel" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={le_treport}>
                            <Popup minWidth={200}>
                                <Link to="/le_treport" className="linkHippodrome"><div className="lien"><div>Le Tréport</div><div><img src={require('../../img/littoral/le_treport/le_treport01min.jpg')} alt="le_treport" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={les_grandes_dalles}>
                            <Popup minWidth={200}>
                                <Link to="/les_grandes_dalles" className="linkHippodrome"><div className="lien"><div>Les Grandes Dalles</div><div><img src={require('../../img/littoral/les_grandes_dalles/lgdalles01min.jpg')} alt="les_grandes_dalles" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={les_petites_dalles}>
                            <Popup minWidth={200}>
                                <Link to="/les_petites_dalles" className="linkHippodrome"><div className="lien"><div>Les Petites Dalles</div><div><img src={require('../../img/littoral/les_petites_dalles/lpdalles01min.jpg')} alt="les_petites_dalles" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={merlimont}>
                            <Popup minWidth={200}>
                                <Link to="/merlimont" className="linkHippodrome"><div className="lien"><div>Merlimont-Plage</div><div><img src={require('../../img/littoral/merlimont/merlimont01min.jpg')} alt="merlimont" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={mers}>
                            <Popup minWidth={200}>
                                <Link to="/mers" className="linkHippodrome"><div className="lien"><div>Mers-les-Bains</div><div><img src={require('../../img/littoral/mers/mers01min.jpg')} alt="mers" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={mesnil_val}>
                            <Popup minWidth={200}>
                                <Link to="/mesnil_val" className="linkHippodrome"><div className="lien"><div>Mesnil Val Plage</div><div><img src={require('../../img/littoral/mesnil_val/mesnil_val01min.jpg')} alt="mesnil_val" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={pourville}>
                            <Popup minWidth={200}>
                                <Link to="/pourville" className="linkHippodrome"><div className="lien"><div>Pourville-sur-Mer</div><div><img src={require('../../img/littoral/pourville/pourville01min.jpg')} alt="pourville" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={puys}>
                            <Popup minWidth={200}>
                                <Link to="/puys" className="linkHippodrome"><div className="lien"><div>Puys</div><div><img src={require('../../img/littoral/puys/puys01min.jpg')} alt="puys" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={quiberville}>
                            <Popup minWidth={200}>
                                <Link to="/quiberville" className="linkHippodrome"><div className="lien"><div>Quiberville</div><div><img src={require('../../img/littoral/quiberville/quiberville01min.jpg')} alt="quiberville" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={saint_aubin}>
                            <Popup minWidth={200}>
                                <Link to="/saint-aubin" className="linkHippodrome"><div className="lien"><div>Saint-Aubin-sur-Mer</div><div><img src={require('../../img/littoral/saint-aubin/saint-aubin01min.jpg')} alt="saint-aubin" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={spenport}>
                            <Popup minWidth={200}>
                                <Link to="/saint-aubin" className="linkHippodrome"><div className="lien"><div>Saint-Pierre-en-Port</div><div><img src={require('../../img/littoral/saint-pierre-en-port/spenport01min.jpg')} alt="spenport" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={saint_valery_en_caux}>
                            <Popup minWidth={200}>
                                <Link to="/saint-valery-en-caux" className="linkHippodrome"><div className="lien"><div>Saint-Valéry-en-Caux</div><div><img src={require('../../img/littoral/saint-valery-en-caux/saint-valery-en-caux01min.jpg')} alt="saint-valery-en-caux" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={saint_valery_sur_somme}>
                            <Popup minWidth={200}>
                                <Link to="/saint-valery-sur-somme" className="linkHippodrome"><div className="lien"><div>Saint-Valéry-sur-Somme</div><div><img src={require('../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme01min.jpg')} alt="saint-valery-sur-somme" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={sainte_cecile}>
                            <Popup minWidth={200}>
                                <Link to="/sainte-cecile_plage" className="linkHippodrome"><div className="lien"><div>Saint-Cécile Plage</div><div><img src={require('../../img/littoral/sainte-cecile/sainte-cecile01min.jpg')} alt="saint-cecile" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={sainte_marguerite}>
                            <Popup minWidth={200}>
                                <Link to="/sainte-marguerite" className="linkHippodrome"><div className="lien"><div>Saint-Marguerite-sur-Mer</div><div><img src={require('../../img/littoral/sainte-marguerite/sainte-marguerite01min.jpg')} alt="saint-marguerite" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={sotteville}>
                            <Popup minWidth={200}>
                                <Link to="/sotteville" className="linkHippodrome"><div className="lien"><div>Sotteville-sur-Mer</div><div><img src={require('../../img/littoral/sotteville/sotteville01min.jpg')} alt="sotteville" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={stella}>
                            <Popup minWidth={200}>
                                <Link to="/stella" className="linkHippodrome"><div className="lien"><div>Stella-Plage</div><div><img src={require('../../img/littoral/stella/stella01min.jpg')} alt="stella" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={varengeville}>
                            <Popup minWidth={200}>
                                <Link to="/varengeville" className="linkHippodrome"><div className="lien"><div>Varengeville-sur-Mer</div><div><img src={require('../../img/littoral/varengeville/varengeville01min.jpg')} alt="varengeville" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={veletot}>
                            <Popup minWidth={200}>
                                <Link to="/veletot" className="linkHippodrome"><div className="lien"><div>Valleuse d'Eletot</div><div><img src={require('../../img/littoral/veletot/veletot01min.jpg')} alt="veletot" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={veules}>
                            <Popup minWidth={200}>
                                <Link to="/veules" className="linkHippodrome"><div className="lien"><div>Veules-les-Roses</div><div><img src={require('../../img/littoral/veules/veules01min.jpg')} alt="veules" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={veulettes}>
                            <Popup minWidth={200}>
                                <Link to="/veulettes" className="linkHippodrome"><div className="lien"><div>Veulettes-sur-Mer</div><div><img src={require('../../img/littoral/veulettes/veulettes01min.jpg')} alt="veulettes" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={vgrainval}>
                            <Popup minWidth={200}>
                                <Link to="/vgrainval" className="linkHippodrome"><div className="lien"><div>Valleuse de Grainval</div><div><img src={require('../../img/littoral/vgrainval/vgrainval01min.jpg')} alt="vgrainval" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={wimereux}>
                            <Popup minWidth={200}>
                                <Link to="/wimereux" className="linkHippodrome"><div className="lien"><div>Wimereux</div><div><img src={require('../../img/littoral/wimereux/wimereux01min.jpg')} alt="wimereux" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                        <Marker position={yport}>
                            <Popup minWidth={200}>
                                <Link to="/yport" className="linkHippodrome"><div className="lien"><div>Yport</div><div><img src={require('../../img/littoral/yport/yport01min.jpg')} alt="yport" className="apercu"/></div></div></Link>
                            </Popup>
                        </Marker>
                    </Map>
              
            </div>
        )
    }
}
