import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class CarteLittoral extends Component {
  state = {
    lat: 50.3,
    lng: 1.1,
    zoom: 7.5
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const ault = [50.1015635, 1.4473006];
    const baie = [50.2125115163148, 1.6683178464456194];
    const belleville = [49.9476778, 1.1637398];
    const benerville_sur_mer = [49.339410335475336, 0.02752296973673296];
    const berck = [50.4052576, 1.5711617];
    const berneval = [49.9572664, 1.1888108];
    const blonville_sur_mer = [49.339868017999756, 0.028210862876303366];
    const boulogne = [50.7259985, 1.6118771];
    const cabourg1 = [49.297396873701764, -0.10630096507771469];
    const cabourg2 = [49.292543154762846, -0.12447833748117754];
    const cayeux = [50.1792004, 1.4933839];
    const colleville_montgomery = [49.293625132209826, -0.2823951296882776];
    const cricqueboeuf = [49.405661299844944, 0.1414178236658703];
    const criel = [50.0160928, 1.3139444];
    const deauville = [49.36353360295033, 0.06904659774387589];
    const dieppe = [49.9246182, 1.0791444];
    const dives_sur_mer = [49.29495528599388, -0.09090491368977105];
    const equihen = [50.679393, 1.5716648];
    const etaples = [50.5139552, 1.6386252];
    const etretat = [49.7074621, 0.2031905];
    const fecamp = [49.7577729, 0.374891];
    const fort_mahon = [50.3414288, 1.5683131];
    const hardelot = [50.6338762, 1.5778096];
    const hermanville_sur_mer = [49.29603225303073, -0.2931680180543106];
    const houlgate = [49.299750716644134, -0.08478741779805565];
    const le_bois_de_cise = [50.08914499767833, 1.4244834055121158];
    const le_croquet = [49.55719501137759, 0.09194783688565522];
    const le_crotoy = [50.2165693, 1.624047];
    const le_havre = [49.49087165636735, 0.09282103786222073];
    const le_hourdel = [50.2147829, 1.5647525];
    const le_touquet = [50.5211202, 1.5909325];
    const le_treport = [50.0591099, 1.3827656];
    const les_grandes_dalles = [49.8172964, 0.510781];
    const les_petites_dalles = [49.8210168, 0.5251555];
    const lion_sur_mer = [49.30263188970311, -0.31382139408440146];
    const merlimont = [50.4553061, 1.614809];
    const mers = [50.0656325, 1.3889703];
    const merville_franceville_plage = [49.28650744074311, -0.20175568132633215];
    const mesnil_val = [50.0419433, 1.3340248];
    const pain_de_sucre = [49.50439041538592, 0.08321623597271177];
    const phare_de_la_heve = [49.51106215330866, 0.0684245703524411];
    const plage_ouistreham = [49.29191161328451, -0.2701268764212994];
    const pointe_ouistreham = [49.278099968417436, -0.24046806688210687];
    const port_dives_sur_mer = [49.29328608059495, -0.09653081069732616];
    const port_ouistreham = [49.275354226968155, -0.2470057538076098];
    const pourville = [49.916219, 1.0304797];
    const puys = [49.9365342, 1.117419];
    const quend = [50.322829094686696, 1.5461341515583582];
    const quiberville = [49.9031626, 0.9232605];
    const saint_aubin = [49.8889942, 0.8768462];
    const saint_jouin_bruneval_belvedere = [
      49.64905668396091,
      0.15729245283401916
    ];
    const saint_jouin_bruneval_plage = [49.6488242115505, 0.15342109419867356];
    const saint_valery_en_caux = [49.8597004, 0.7106831];
    const saint_valery_sur_somme = [50.1887006, 1.6279147];
    const sainte_adresse = [49.50495225104016, 0.07481740281443994];
    const sainte_cecile = [50.5747158, 1.5826268];
    const sainte_marguerite = [49.9088387, 0.9467867];
    const sotteville = [49.8809899, 0.8306694];
    const spenport = [49.8069179, 0.4946787];
    const stella = [50.4799397, 1.577138];
    const table_d_orientation_sainte_adresse = [
      49.50713945422277,
      0.07376828633311128
    ];
    const trouville_sur_mer1 = [49.37410075048613, 0.08511754737730914];
    const trouville_sur_mer2 = [49.36737101116615, 0.07552186080749923];
    const valleuse_boucherot = [49.64280588649105, 0.15316556140311022];
    const valleuse_de_vaucottes = [49.73798575146814, 0.2908350344303434];
    const varaville = [49.286910449389204, -0.16864406675309196];
    const varengeville = [49.9046335, 1.0021825];
    const veletot = [49.786164997944525, 0.43129265244890025];
    const veules = [49.8722029, 0.7990652];
    const veulettes = [49.8503223, 0.5971459];
    const vgrainval = [49.750562118454745, 0.3474143340336777];
    const villers_sur_mer1 = [49.32894895905092, 0.0067647577833795935];
    const villers_sur_mer2 = [49.32431557010392, -0.004348807631764373];
    const villerville = [49.40319463035321, 0.13029669355369755];
    const wimereux = [50.7696858, 1.6118608];
    const yport = [49.7378489, 0.3133709];

    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={ault}>
            <Popup minWidth={200}>
              <Link to="/ault" className="linkPlage">
                <div className="lien">
                  <div>Ault</div>
                  <div>
                    <img
                      src={require("../../img/littoral/ault/ault01min.jpg")}
                      alt="ault"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={baie}>
            <Popup minWidth={200}>
              <Link to="/baie_de_somme" className="linkPlage">
                <div className="lien">
                  <div>Baie de Somme</div>
                  <div>
                    <img
                      src={require("../../img/littoral/baie/baie01min.jpg")}
                      alt="baie"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={belleville}>
            <Popup minWidth={200}>
              <Link to="/belleville-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Belleville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/belleville/belleville01min.jpg")}
                      alt="belleville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={benerville_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/benerville-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Benerville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/benerville-sur-mer/benerville-sur-mer01min.jpg")}
                      alt="benerville-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={berck}>
            <Popup minWidth={200}>
              <Link to="/berck" className="linkPlage">
                <div className="lien">
                  <div>Berck</div>
                  <div>
                    <img
                      src={require("../../img/littoral/berck/berck01min.jpg")}
                      alt="berck"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={berneval}>
            <Popup minWidth={200}>
              <Link to="/berneval" className="linkPlage">
                <div className="lien">
                  <div>Berneval</div>
                  <div>
                    <img
                      src={require("../../img/littoral/berneval/berneval01min.jpg")}
                      alt="berneval"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={blonville_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/blonville-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Blonville-sur-mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/blonville-sur-mer/blonville-sur-mer01min.jpg")}
                      alt="blonville-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={boulogne}>
            <Popup minWidth={200}>
              <Link to="/boulogne" className="linkPlage">
                <div className="lien">
                  <div>Boulogne-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/boulogne/boulogne01min.jpg")}
                      alt="boulogne"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cabourg1}>
            <Popup minWidth={200}>
              <Link to="/cabourg1" className="linkPlage">
                <div className="lien">
                  <div>Cabourg 1</div>
                  <div>
                    <img
                      src={require("../../img/littoral/cabourg1/cabourg101min.jpg")}
                      alt="cabourg1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cabourg2}>
            <Popup minWidth={200}>
              <Link to="/cabourg2" className="linkPlage">
                <div className="lien">
                  <div>Cabourg 2</div>
                  <div>
                    <img
                      src={require("../../img/littoral/cabourg2/cabourg201min.jpg")}
                      alt="cabourg2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cayeux}>
            <Popup minWidth={200}>
              <Link to="/cayeux" className="linkPlage">
                <div className="lien">
                  <div>Cayeux-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/cayeux/cayeux01min.jpg")}
                      alt="cayeux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={colleville_montgomery}>
            <Popup minWidth={200}>
              <Link to="/colleville-montgomery" className="linkPlage">
                <div className="lien">
                  <div>Colleville-Montgomery (Sword Beach)</div>
                  <div>
                    <img
                      src={require("../../img/littoral/colleville-montgomery/colleville-montgomery01min.jpg")}
                      alt="colleville-montgomery"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cricqueboeuf}>
            <Popup minWidth={200}>
              <Link to="/cricqueboeuf" className="linkPlage">
                <div className="lien">
                  <div>Cricqueboeuf</div>
                  <div>
                    <img
                      src={require("../../img/littoral/cricqueboeuf/cricqueboeuf01min.jpg")}
                      alt="cricqueboeuf"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={criel}>
            <Popup minWidth={200}>
              <Link to="/criel" className="linkPlage">
                <div className="lien">
                  <div>Criel-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/criel/criel01min.jpg")}
                      alt="criel"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={deauville}>
            <Popup minWidth={200}>
              <Link to="/deauville" className="linkPlage">
                <div className="lien">
                  <div>Deauville</div>
                  <div>
                    <img
                      src={require("../../img/littoral/deauville/deauville01min.jpg")}
                      alt="deauville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={dieppe}>
            <Popup minWidth={200}>
              <Link to="/dieppe" className="linkHippodrome">
                <div className="lien">
                  <div>Dieppe</div>
                  <div>
                    <img
                      src={require("../../img/littoral/dieppe/dieppe01min.jpg")}
                      alt="dieppe"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={dives_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/dives-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Dives-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/dives-sur-mer/dives-sur-mer01min.jpg")}
                      alt="dives-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={equihen}>
            <Popup minWidth={200}>
              <Link to="/equihen" className="linkHippodrome">
                <div className="lien">
                  <div>Equihen-Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/equihen/equihen01min.jpg")}
                      alt="equihen"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={etaples}>
            <Popup minWidth={200}>
              <Link to="/etaples" className="linkHippodrome">
                <div className="lien">
                  <div>Etaples</div>
                  <div>
                    <img
                      src={require("../../img/littoral/etaples/etaples01min.jpg")}
                      alt="etaples"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={etretat}>
            <Popup minWidth={200}>
              <Link to="/etretat" className="linkHippodrome">
                <div className="lien">
                  <div>Etretat</div>
                  <div>
                    <img
                      src={require("../../img/littoral/etretat/etretat01min.jpg")}
                      alt="etretat"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={fecamp}>
            <Popup minWidth={200}>
              <Link to="/fecamp" className="linkHippodrome">
                <div className="lien">
                  <div>Fécamp</div>
                  <div>
                    <img
                      src={require("../../img/littoral/fecamp/fecamp01min.jpg")}
                      alt="fecamp"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={fort_mahon}>
            <Popup minWidth={200}>
              <Link to="/fort-mahon" className="linkHippodrome">
                <div className="lien">
                  <div>Fort-Mahon-Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/fort-mahon/fort-mahon01min.jpg")}
                      alt="fort-mahon"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={hardelot}>
            <Popup minWidth={200}>
              <Link to="/hardelot" className="linkHippodrome">
                <div className="lien">
                  <div>Hardelot-Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/hardelot/hardelot01min.jpg")}
                      alt="hardelot"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={hermanville_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/hermanville-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Hermanville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/hermanville-sur-mer/hermanville-sur-mer01min.jpg")}
                      alt="hermanville-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={houlgate}>
            <Popup minWidth={200}>
              <Link to="/houlgate" className="linkHippodrome">
                <div className="lien">
                  <div>Houlgate</div>
                  <div>
                    <img
                      src={require("../../img/littoral/houlgate/houlgate01min.jpg")}
                      alt="houlgate"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_bois_de_cise}>
            <Popup minWidth={200}>
              <Link to="/le_bois_de_cise" className="linkHippodrome">
                <div className="lien">
                  <div>Le Bois de Cise</div>
                  <div>
                    <img
                      src={require("../../img/littoral/le_bois_de_cise/le_bois_de_cise01min.jpg")}
                      alt="le_bois_de_cise"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_croquet}>
            <Popup minWidth={200}>
              <Link to="/le_croquet" className="linkHippodrome">
                <div className="lien">
                  <div>Le Croquet</div>
                  <div>
                    <img
                      src={require("../../img/littoral/le_croquet/le_croquet01min.jpg")}
                      alt="le_croquet"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_crotoy}>
            <Popup minWidth={200}>
              <Link to="/le_crotoy" className="linkHippodrome">
                <div className="lien">
                  <div>Le Crotoy</div>
                  <div>
                    <img
                      src={require("../../img/littoral/le_crotoy/le_crotoy01min.jpg")}
                      alt="le_crotoy"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_havre}>
            <Popup minWidth={200}>
              <Link to="/le_havre" className="linkHippodrome">
                <div className="lien">
                  <div>Le Havre</div>
                  <div>
                    <img
                      src={require("../../img/littoral/le_havre/le_havre01min.jpg")}
                      alt="le_havre"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_hourdel}>
            <Popup minWidth={200}>
              <Link to="/le_hourdel" className="linkHippodrome">
                <div className="lien">
                  <div>Le Hourdel</div>
                  <div>
                    <img
                      src={require("../../img/littoral/le_hourdel/le_hourdel01min.jpg")}
                      alt="le_hourdel"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_touquet}>
            <Popup minWidth={200}>
              <Link to="/le_touquet" className="linkHippodrome">
                <div className="lien">
                  <div>Le Touquet-Paris-Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/le_touquet/le_touquet01min.jpg")}
                      alt="le_touquet"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_treport}>
            <Popup minWidth={200}>
              <Link to="/le_treport" className="linkHippodrome">
                <div className="lien">
                  <div>Le Tréport</div>
                  <div>
                    <img
                      src={require("../../img/littoral/le_treport/le_treport01min.jpg")}
                      alt="le_treport"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={les_grandes_dalles}>
            <Popup minWidth={200}>
              <Link to="/les_grandes_dalles" className="linkHippodrome">
                <div className="lien">
                  <div>Les Grandes Dalles</div>
                  <div>
                    <img
                      src={require("../../img/littoral/les_grandes_dalles/lgdalles01min.jpg")}
                      alt="les_grandes_dalles"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={les_petites_dalles}>
            <Popup minWidth={200}>
              <Link to="/les_petites_dalles" className="linkHippodrome">
                <div className="lien">
                  <div>Les Petites Dalles</div>
                  <div>
                    <img
                      src={require("../../img/littoral/les_petites_dalles/lpdalles01min.jpg")}
                      alt="les_petites_dalles"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={lion_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/lion-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Lion-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/lion-sur-mer/lion-sur-mer01min.jpg")}
                      alt="lion-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={merlimont}>
            <Popup minWidth={200}>
              <Link to="/merlimont" className="linkHippodrome">
                <div className="lien">
                  <div>Merlimont-Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/merlimont/merlimont01min.jpg")}
                      alt="merlimont"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={mers}>
            <Popup minWidth={200}>
              <Link to="/mers" className="linkHippodrome">
                <div className="lien">
                  <div>Mers-les-Bains</div>
                  <div>
                    <img
                      src={require("../../img/littoral/mers/mers01min.jpg")}
                      alt="mers"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={merville_franceville_plage}>
            <Popup minWidth={200}>
              <Link to="/merville-franceville-plage" className="linkHippodrome">
                <div className="lien">
                  <div>Merville-Franceville-Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage01min.jpg")}
                      alt="erville-franceville-plage"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={mesnil_val}>
            <Popup minWidth={200}>
              <Link to="/mesnil_val" className="linkHippodrome">
                <div className="lien">
                  <div>Mesnil Val Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/mesnil_val/mesnil_val01min.jpg")}
                      alt="mesnil_val"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pain_de_sucre}>
            <Popup minWidth={200}>
              <Link to="/pain_de_sucre" className="linkHippodrome">
                <div className="lien">
                  <div>Pain de Sucre</div>
                  <div>
                    <img
                      src={require("../../img/littoral/pain_de_sucre/pain_de_sucre01min.jpg")}
                      alt="pain_de_sucre"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={phare_de_la_heve}>
            <Popup minWidth={200}>
              <Link to="/phare_de_la_heve" className="linkHippodrome">
                <div className="lien">
                  <div>Phare de la Hève</div>
                  <div>
                    <img
                      src={require("../../img/littoral/phare_de_la_heve/phare_de_la_heve01min.jpg")}
                      alt="phare_de_la_heve"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={plage_ouistreham}>
            <Popup minWidth={200}>
              <Link to="/plage_ouistreham" className="linkHippodrome">
                <div className="lien">
                  <div>Plage de Ouistreham</div>
                  <div>
                    <img
                      src={require("../../img/littoral/plage_ouistreham/plage_ouistreham01min.jpg")}
                      alt="plage_ouistreham"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pointe_ouistreham}>
            <Popup minWidth={200}>
              <Link to="/pointe_ouistreham" className="linkHippodrome">
                <div className="lien">
                  <div>Pointe de Ouistreham</div>
                  <div>
                    <img
                      src={require("../../img/littoral/pointe_ouistreham/pointe_ouistreham01min.jpg")}
                      alt="pointe_ouistreham"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_dives_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/port_dives-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Port de Dives-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/port_dives-sur-mer/port_dives-sur-mer01min.jpg")}
                      alt="port_dives-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_ouistreham}>
            <Popup minWidth={200}>
              <Link to="/port_ouistreham" className="linkHippodrome">
                <div className="lien">
                  <div>Port de Ouistreham</div>
                  <div>
                    <img
                      src={require("../../img/littoral/port_ouistreham/port_ouistreham01min.jpg")}
                      alt="port_ouistreham"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pourville}>
            <Popup minWidth={200}>
              <Link to="/pourville" className="linkHippodrome">
                <div className="lien">
                  <div>Pourville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/pourville/pourville01min.jpg")}
                      alt="pourville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={puys}>
            <Popup minWidth={200}>
              <Link to="/puys" className="linkHippodrome">
                <div className="lien">
                  <div>Puys</div>
                  <div>
                    <img
                      src={require("../../img/littoral/puys/puys01min.jpg")}
                      alt="puys"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={quend}>
            <Popup minWidth={200}>
              <Link to="/quend" className="linkHippodrome">
                <div className="lien">
                  <div>Quend</div>
                  <div>
                    <img
                      src={require("../../img/littoral/quend/quend01min.jpg")}
                      alt="quend"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={quiberville}>
            <Popup minWidth={200}>
              <Link to="/quiberville" className="linkHippodrome">
                <div className="lien">
                  <div>Quiberville</div>
                  <div>
                    <img
                      src={require("../../img/littoral/quiberville/quiberville01min.jpg")}
                      alt="quiberville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_aubin}>
            <Popup minWidth={200}>
              <Link to="/saint-aubin" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Aubin-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/saint-aubin/saint-aubin01min.jpg")}
                      alt="saint-aubin"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_jouin_bruneval_belvedere}>
            <Popup minWidth={200}>
              <Link
                to="/saint-jouin-bruneval_belvedere"
                className="linkHippodrome"
              >
                <div className="lien">
                  <div>Saint-Jouin-Bruneval (belvédère)</div>
                  <div>
                    <img
                      src={require("../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere01min.jpg")}
                      alt="saint-jouin-bruneval_belvedere"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_jouin_bruneval_plage}>
            <Popup minWidth={200}>
              <Link to="/saint-jouin-bruneval_plage" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Jouin-Bruneval (plage)</div>
                  <div>
                    <img
                      src={require("../../img/littoral/saint-jouin-bruneval_plage/saint-jouin-bruneval_plage01min.jpg")}
                      alt="saint-jouin-bruneval_plage"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_valery_en_caux}>
            <Popup minWidth={200}>
              <Link to="/saint-valery-en-caux" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Valéry-en-Caux</div>
                  <div>
                    <img
                      src={require("../../img/littoral/saint-valery-en-caux/saint-valery-en-caux01min.jpg")}
                      alt="saint-valery-en-caux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_valery_sur_somme}>
            <Popup minWidth={200}>
              <Link to="/saint-valery-sur-somme" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Valéry-sur-Somme</div>
                  <div>
                    <img
                      src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme01min.jpg")}
                      alt="saint-valery-sur-somme"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sainte_adresse}>
            <Popup minWidth={200}>
              <Link to="/sainte-adresse" className="linkHippodrome">
                <div className="lien">
                  <div>Sainte-Adresse</div>
                  <div>
                    <img
                      src={require("../../img/littoral/sainte-adresse/sainte-adresse01min.jpg")}
                      alt="saint-adresse"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sainte_cecile}>
            <Popup minWidth={200}>
              <Link to="/sainte-cecile_plage" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Cécile Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/sainte-cecile/sainte-cecile01min.jpg")}
                      alt="saint-cecile"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sainte_marguerite}>
            <Popup minWidth={200}>
              <Link to="/sainte-marguerite" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Marguerite-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/sainte-marguerite/sainte-marguerite01min.jpg")}
                      alt="saint-marguerite"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sotteville}>
            <Popup minWidth={200}>
              <Link to="/sotteville" className="linkHippodrome">
                <div className="lien">
                  <div>Sotteville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/sotteville/sotteville01min.jpg")}
                      alt="sotteville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={spenport}>
            <Popup minWidth={200}>
              <Link to="/saint-pierre-en-port" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Pierre-en-Port</div>
                  <div>
                    <img
                      src={require("../../img/littoral/saint-pierre-en-port/spenport01min.jpg")}
                      alt="spenport"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={stella}>
            <Popup minWidth={200}>
              <Link to="/stella" className="linkHippodrome">
                <div className="lien">
                  <div>Stella-Plage</div>
                  <div>
                    <img
                      src={require("../../img/littoral/stella/stella01min.jpg")}
                      alt="stella"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={table_d_orientation_sainte_adresse}>
            <Popup minWidth={200}>
              <Link
                to="/table_d_orientation_sainte-adresse"
                className="linkHippodrome"
              >
                <div className="lien">
                  <div>Table d'orientation Sainte-Adresse</div>
                  <div>
                    <img
                      src={require("../../img/littoral/table_d_orientation_sainte-adresse/table_d_orientation_sainte-adresse01min.jpg")}
                      alt="table_d_orientation_sainte-adresse"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={trouville_sur_mer1}>
            <Popup minWidth={200}>
              <Link to="/trouville-sur-mer1" className="linkHippodrome">
                <div className="lien">
                  <div>Trouville-sur-Mer 1</div>
                  <div>
                    <img
                      src={require("../../img/littoral/trouville-sur-mer1/trouville-sur-mer101min.jpg")}
                      alt="trouville-sur-mer1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={trouville_sur_mer2}>
            <Popup minWidth={200}>
              <Link to="/trouville-sur-mer2" className="linkHippodrome">
                <div className="lien">
                  <div>Trouville-sur-Mer 2</div>
                  <div>
                    <img
                      src={require("../../img/littoral/trouville-sur-mer2/trouville-sur-mer201min.jpg")}
                      alt="trouville-sur-mer2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={valleuse_boucherot}>
            <Popup minWidth={200}>
              <Link to="/valleuse_boucherot" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse Boucherot</div>
                  <div>
                    <img
                      src={require("../../img/littoral/valleuse_boucherot/valleuse_boucherot01min.jpg")}
                      alt="valleuse_boucherot"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={valleuse_de_vaucottes}>
            <Popup minWidth={200}>
              <Link to="/valleuse_de_vaucottes" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse de Vaucottes</div>
                  <div>
                    <img
                      src={require("../../img/littoral/valleuse_de_vaucottes/valleuse_de_vaucottes01min.jpg")}
                      alt="valleuse_de_vaucottes"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={varaville}>
            <Popup minWidth={200}>
              <Link to="/varaville" className="linkHippodrome">
                <div className="lien">
                  <div>Varaville</div>
                  <div>
                    <img
                      src={require("../../img/littoral/varaville/varaville01min.jpg")}
                      alt="varaville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={varengeville}>
            <Popup minWidth={200}>
              <Link to="/varengeville" className="linkHippodrome">
                <div className="lien">
                  <div>Varengeville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/varengeville/varengeville01min.jpg")}
                      alt="varengeville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={veletot}>
            <Popup minWidth={200}>
              <Link to="/veletot" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse d'Eletot</div>
                  <div>
                    <img
                      src={require("../../img/littoral/veletot/veletot01min.jpg")}
                      alt="veletot"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={veules}>
            <Popup minWidth={200}>
              <Link to="/veules" className="linkHippodrome">
                <div className="lien">
                  <div>Veules-les-Roses</div>
                  <div>
                    <img
                      src={require("../../img/littoral/veules/veules01min.jpg")}
                      alt="veules"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={veulettes}>
            <Popup minWidth={200}>
              <Link to="/veulettes" className="linkHippodrome">
                <div className="lien">
                  <div>Veulettes-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../img/littoral/veulettes/veulettes01min.jpg")}
                      alt="veulettes"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={vgrainval}>
            <Popup minWidth={200}>
              <Link to="/vgrainval" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse de Grainval</div>
                  <div>
                    <img
                      src={require("../../img/littoral/vgrainval/vgrainval01min.jpg")}
                      alt="vgrainval"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villers_sur_mer1}>
            <Popup minWidth={200}>
              <Link to="/villers-sur-mer1" className="linkHippodrome">
                <div className="lien">
                  <div>Villers-sur-Mer (1)</div>
                  <div>
                    <img
                      src={require("../../img/littoral/villers-sur-mer1/villers-sur-mer101min.jpg")}
                      alt="villers-sur-mer1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villers_sur_mer2}>
            <Popup minWidth={200}>
              <Link to="/villers-sur-mer2" className="linkHippodrome">
                <div className="lien">
                  <div>Villers-sur-Mer (2)</div>
                  <div>
                    <img
                      src={require("../../img/littoral/villers-sur-mer2/villers-sur-mer201min.jpg")}
                      alt="villers-sur-mer2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villerville}>
            <Popup minWidth={200}>
              <Link to="/villerville" className="linkHippodrome">
                <div className="lien">
                  <div>Villerville</div>
                  <div>
                    <img
                      src={require("../../img/littoral/villerville/villerville01min.jpg")}
                      alt="villerville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={wimereux}>
            <Popup minWidth={200}>
              <Link to="/wimereux" className="linkHippodrome">
                <div className="lien">
                  <div>Wimereux</div>
                  <div>
                    <img
                      src={require("../../img/littoral/wimereux/wimereux01min.jpg")}
                      alt="wimereux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={yport}>
            <Popup minWidth={200}>
              <Link to="/yport" className="linkHippodrome">
                <div className="lien">
                  <div>Yport</div>
                  <div>
                    <img
                      src={require("../../img/littoral/yport/yport01min.jpg")}
                      alt="yport"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
