import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Seine_Eure extends Component {

  render() {
    const aizier = [49.431928407877166, 0.6245415669635257];
    const barrage_poses = [49.31016932741239, 1.2364600137390047];
    const berville_sur_mer = [49.43727738166467, 0.35969628589593405];
    const la_roquette = [49.25060354040053, 1.3518886396638718];
    const le_plessis = [49.30212635047978, 1.2645172895483237];
    const le_thuit = [49.254447617943185, 1.376624308241885];
    const le_val_d_hazey = [49.1896278739391, 1.3341148213599263];
    const le_val_pitant = [49.30959482502866, 1.2485836639375236];
    const les_andelys = [49.2469193, 1.4215534];
    const les_mousseaux = [49.19813000943054, 1.34611101749738];
    const notre_dame_de_l_isle = [49.1455113, 1.4277246];
    const phare_de_la_roque = [49.44387280261981, 0.4251056914048146];
    const port_morin = [49.238051651593516, 1.3972022389704097];
    const port_mort = [49.16899232754176, 1.3942056070488862];
    const quillebeuf = [49.470337430065115, 0.5301951339102651];
    const tosny = [49.21739244922967, 1.375410967104962];
    const vatteville = [49.49712555659109, 0.6714457248089811];
    const vernon = [49.09761619380803, 1.4884821158460415];
    const vieux_port = [49.42689869574646, 0.6100424316636621];
    const villers_sur_le_roule = [49.20334508543771, 1.3434505936257768];

    return (
      <div>
        <Marker position={aizier}>
            <Popup minWidth={200}>
              <Link to="/aizier" className="linkPlage">
                <div className="lien">
                  <div>Aizier</div>
                  <div>
                    <img
                      src={require("../../../img/seine/aizier/aizier01min.jpg")}
                      alt="aizier"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={barrage_poses}>
            <Popup minWidth={200}>
              <Link to="/barrage_poses" className="linkPlage">
                <div className="lien">
                  <div>Barrage de Poses</div>
                  <div>
                    <img
                      src={require("../../../img/seine/barrage_poses/barrage_poses01min.jpg")}
                      alt="barrage_poses"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={berville_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/berville-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Berville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/seine/berville-sur-mer/berville-sur-mer01min.jpg")}
                      alt="berville-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={la_roquette}>
            <Popup minWidth={200}>
              <Link to="/la_roquette" className="linkPlage">
                <div className="lien">
                  <div>La Roquette</div>
                  <div>
                    <img
                      src={require("../../../img/seine/la_roquette/la_roquette01min.jpg")}
                      alt="la_roquette"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_val_d_hazey}>
            <Popup minWidth={200}>
              <Link to="/le_val_d_hazey" className="linkPlage">
                <div className="lien">
                  <div>Le Val d'Hazey</div>
                  <div>
                    <img
                      src={require("../../../img/seine/le_val_d_hazey/le_val_d_hazey01min.jpg")}
                      alt="le_val_d_hazey"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_val_pitant}>
            <Popup minWidth={200}>
              <Link to="/le_val_pitant" className="linkPlage">
                <div className="lien">
                  <div>Le Val Pitant</div>
                  <div>
                    <img
                      src={require("../../../img/seine/le_val_pitant/le_val_pitant01min.jpg")}
                      alt="le_val_pitant"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={les_andelys}>
            <Popup minWidth={200}>
              <Link to="/les_andelys" className="linkPlage">
                <div className="lien">
                  <div>Les Andelys</div>
                  <div>
                    <img
                      src={require("../../../img/seine/les_andelys/les_andelys01min.jpg")}
                      alt="les_andelys"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={les_mousseaux}>
            <Popup minWidth={200}>
              <Link to="/les_mousseaux" className="linkPlage">
                <div className="lien">
                  <div>Les Mousseaux</div>
                  <div>
                    <img
                      src={require("../../../img/seine/les_mousseaux/les_mousseaux01min.jpg")}
                      alt="les_mousseaux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={notre_dame_de_l_isle}>
            <Popup minWidth={200}>
              <Link to="/notre-dame-de-l_isle" className="linkPlage">
                <div className="lien">
                  <div>Notre-Dame-de-l'Isle</div>
                  <div>
                    <img
                      src={require("../../../img/seine/notre-dame-de-l_isle/notre-dame-de-l_isle01min.jpg")}
                      alt="notre-dame-de-l_isle"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_plessis}>
            <Popup minWidth={200}>
              <Link to="/le_plessis" className="linkPlage">
                <div className="lien">
                  <div>Panorama du Plessis</div>
                  <div>
                    <img
                      src={require("../../../img/seine/le_plessis/le_plessis01min.jpg")}
                      alt="le_plessis"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_thuit}>
            <Popup minWidth={200}>
              <Link to="/le_thuit" className="linkPlage">
                <div className="lien">
                  <div>Panorama du Thuit</div>
                  <div>
                    <img
                      src={require("../../../img/seine/le_thuit/le_thuit01min.jpg")}
                      alt="le_thuit"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={phare_de_la_roque}>
            <Popup minWidth={200}>
              <Link to="/phare_de_la_roque" className="linkPlage">
                <div className="lien">
                  <div>Phare de la Roque</div>
                  <div>
                    <img
                      src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque01min.jpg")}
                      alt="phare_de_la_roque"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_morin}>
            <Popup minWidth={200}>
              <Link to="/port_morin" className="linkPlage">
                <div className="lien">
                  <div>Port Morin</div>
                  <div>
                    <img
                      src={require("../../../img/seine/port_morin/port_morin01min.jpg")}
                      alt="port_morin"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_mort}>
            <Popup minWidth={200}>
              <Link to="/port-mort" className="linkPlage">
                <div className="lien">
                  <div>Port-Mort</div>
                  <div>
                    <img
                      src={require("../../../img/seine/port-mort/port-mort01min.jpg")}
                      alt="port-mort"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={quillebeuf}>
            <Popup minWidth={200}>
              <Link to="/quillebeuf" className="linkPlage">
                <div className="lien">
                  <div>Quillebeuf-sur-Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/quillebeuf/quillebeuf01min.jpg")}
                      alt="quillebeuf"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={tosny}>
            <Popup minWidth={200}>
              <Link to="/tosny" className="linkPlage">
                <div className="lien">
                  <div>Tosny</div>
                  <div>
                    <img
                      src={require("../../../img/seine/tosny/tosny01min.jpg")}
                      alt="tosny"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={vatteville}>
            <Popup minWidth={200}>
              <Link to="/vatteville" className="linkPlage">
                <div className="lien">
                  <div>Vatteville-la-Rue</div>
                  <div>
                    <img
                      src={require("../../../img/seine/vatteville/vatteville01min.jpg")}
                      alt="vatteville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={vernon}>
            <Popup minWidth={200}>
              <Link to="/vernon" className="linkPlage">
                <div className="lien">
                  <div>Vernon</div>
                  <div>
                    <img
                      src={require("../../../img/seine/vernon/vernon01min.jpg")}
                      alt="vernon"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={vieux_port}>
            <Popup minWidth={200}>
              <Link to="/vieux-port" className="linkPlage">
                <div className="lien">
                  <div>Vieux-Port</div>
                  <div>
                    <img
                      src={require("../../../img/seine/vieux-port/vieux-port01min.jpg")}
                      alt="vieux-port"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villers_sur_le_roule}>
            <Popup minWidth={200}>
              <Link to="/villers-sur-le-roule" className="linkPlage">
                <div className="lien">
                  <div>Villers-sur-le-Roule</div>
                  <div>
                    <img
                      src={require("../../../img/seine/villers-sur-le-roule/villers-sur-le-roule01min.jpg")}
                      alt="villers-sur-le-roule"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
      </div>
    );
  }
}
