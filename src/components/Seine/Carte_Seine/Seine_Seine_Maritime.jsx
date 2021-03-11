import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Seine_Seine_Maritime extends Component {

  render() {
    const caudebec = [49.52416135852367, 0.7263719063849283];
    const cleon = [49.3142135, 1.0329344];
    const duclair = [49.482563, 0.8754968];
    const hautot = [49.3602514, 0.9773356];
    const heurteauville = [49.444798, 0.8128955];
    const jumieges = [49.4317826, 0.8175572];
    const la_mailleray_sur_seine = [49.48230701294539, 0.7747897018168937];
    const le_mesnil_sous_jumieges = [49.4124195, 0.8576236];
    const notre_dame_de_bliquetuit = [49.49294918557146, 0.7712008905530077];
    const passage_du_trait = [49.466176205756646, 0.811326038830531];
    const passage_d_yssainville = [49.456570881392274, 0.8152271590618643];
    const port_jerome = [49.472651189507765, 0.5354173653879579];
    const port_jumieges = [49.43748167827217, 0.8038979890403919];
    const rouen = [49.4404591, 1.0939658];
    const sahurs = [49.3586705, 0.9437092];
    const saint_aubin_les_elbeuf = [49.29435810837388, 1.0154206793338627];
    const saint_maur = [49.35375598710399, 0.9542156965897641];
    const saint_nicolas_de_bliquetuit = [49.52091892613221, 0.7276994092058375];
    const saint_paul = [49.46908930819602, 0.8605530137303674];
    const saint_pierre_de_manneville = [49.37659117448786, 0.9195194617895686];
    const tancarville = [49.48139170731105, 0.47487084026760495];
    const val_de_la_haye = [49.3773661, 1.0010383];
    const villequier = [49.51442113762259, 0.6767299273563898];

    return (
      <div>
          <Marker position={caudebec}>
            <Popup minWidth={200}>
              <Link to="/caudebec" className="linkPlage">
                <div className="lien">
                  <div>Caudebec-en-Caux</div>
                  <div>
                    <img
                      src={require("../../../img/seine/caudebec/caudebec01min.jpg")}
                      alt="caudebec"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cleon}>
            <Popup minWidth={200}>
              <Link to="/cleon" className="linkPlage">
                <div className="lien">
                  <div>Cléon</div>
                  <div>
                    <img
                      src={require("../../../img/seine/cleon/cleon01min.jpg")}
                      alt="cleon"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={duclair}>
            <Popup minWidth={200}>
              <Link to="/duclair" className="linkPlage">
                <div className="lien">
                  <div>Duclair</div>
                  <div>
                    <img
                      src={require("../../../img/seine/duclair/duclair01min.jpg")}
                      alt="duclair"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={hautot}>
            <Popup minWidth={200}>
              <Link to="/hautot" className="linkPlage">
                <div className="lien">
                  <div>Hautot-sur-Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/hautot/hautot01min.jpg")}
                      alt="hautot"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={heurteauville}>
            <Popup minWidth={200}>
              <Link to="/heurteauville" className="linkPlage">
                <div className="lien">
                  <div>Heurteauville</div>
                  <div>
                    <img
                      src={require("../../../img/seine/heurteauville/heurteauville01min.jpg")}
                      alt="heurteauville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={jumieges}>
            <Popup minWidth={200}>
              <Link to="/jumieges" className="linkPlage">
                <div className="lien">
                  <div>Jumièges</div>
                  <div>
                    <img
                      src={require("../../../img/seine/jumieges/jumieges01min.jpg")}
                      alt="jumieges"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={la_mailleray_sur_seine}>
            <Popup minWidth={200}>
              <Link to="/la_mailleray-sur-seine" className="linkPlage">
                <div className="lien">
                  <div>La Mailleray-sur-Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine01min.jpg")}
                      alt="la_mailleray-sur-seine"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_mesnil_sous_jumieges}>
            <Popup minWidth={200}>
              <Link to="/le_mesnil-sous-jumieges" className="linkPlage">
                <div className="lien">
                  <div>Le Mesnil-sous-Jumièges</div>
                  <div>
                    <img
                      src={require("../../../img/seine/le_mesnil-sous-jumieges/le_mesnil-sous-jumieges01min.jpg")}
                      alt="le_mesnil-sous-jumieges"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={notre_dame_de_bliquetuit}>
            <Popup minWidth={200}>
              <Link to="/notre-dame-de-bliquetuit" className="linkPlage">
                <div className="lien">
                  <div>Notre-Dame-de-Bliquetuit</div>
                  <div>
                    <img
                      src={require("../../../img/seine/notre-dame-de-bliquetuit/notre-dame-de-bliquetuit01min.jpg")}
                      alt="notre-dame-de-bliquetuit"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={passage_du_trait}>
            <Popup minWidth={200}>
              <Link to="/passage_du_trait" className="linkPlage">
                <div className="lien">
                  <div>Passage du Trait</div>
                  <div>
                    <img
                      src={require("../../../img/seine/passage_du_trait/passage_du_trait01min.jpg")}
                      alt="passage_du_trait"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={passage_d_yssainville}>
            <Popup minWidth={200}>
              <Link to="/passage_d_yssainville" className="linkPlage">
                <div className="lien">
                  <div>Passage d'Yssainville</div>
                  <div>
                    <img
                      src={require("../../../img/seine/passage_d_yssainville/passage_d_yssainville01min.jpg")}
                      alt="passage_d_yssainville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_jerome}>
            <Popup minWidth={200}>
              <Link to="/port-jerome" className="linkPlage">
                <div className="lien">
                  <div>Port-Jérôme-sur-Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/port-jerome/port-jerome01min.jpg")}
                      alt="port-jerome"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_jumieges}>
            <Popup minWidth={200}>
              <Link to="/port_jumieges" className="linkPlage">
                <div className="lien">
                  <div>Port Jumièges</div>
                  <div>
                    <img
                      src={require("../../../img/seine/port_jumieges/port_jumieges01min.jpg")}
                      alt="port_jumieges"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={rouen}>
            <Popup minWidth={200}>
              <Link to="/rouen" className="linkPlage">
                <div className="lien">
                  <div>Rouen</div>
                  <div>
                    <img
                      src={require("../../../img/seine/rouen/rouen01min.jpg")}
                      alt="rouen"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sahurs}>
            <Popup minWidth={200}>
              <Link to="/sahurs" className="linkPlage">
                <div className="lien">
                  <div>Sahurs</div>
                  <div>
                    <img
                      src={require("../../../img/seine/sahurs/sahurs01min.jpg")}
                      alt="sahurs"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_aubin_les_elbeuf}>
            <Popup minWidth={200}>
              <Link to="/saint-aubin-les-elbeuf" className="linkPlage">
                <div className="lien">
                  <div>Saint-Aubin-lès-Elbeuf</div>
                  <div>
                    <img
                      src={require("../../../img/seine/saint-aubin-les-elbeuf/saint-aubin-les-elbeuf01min.jpg")}
                      alt="saint-aubin-les-elbeuf"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_maur}>
            <Popup minWidth={200}>
              <Link to="/saint-maur" className="linkPlage">
                <div className="lien">
                  <div>Saint-Maur</div>
                  <div>
                    <img
                      src={require("../../../img/seine/saint-maur/saint-maur01min.jpg")}
                      alt="saint-maur"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_nicolas_de_bliquetuit}>
            <Popup minWidth={200}>
              <Link to="/saint-nicolas-de-bliquetuit" className="linkPlage">
                <div className="lien">
                  <div>Saint-Nicolas-de-Bliquetuit</div>
                  <div>
                    <img
                      src={require("../../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit01min.jpg")}
                      alt="saint-nicolas-de-bliquetuit"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_paul}>
            <Popup minWidth={200}>
              <Link to="/saint-paul" className="linkPlage">
                <div className="lien">
                  <div>Saint-Paul</div>
                  <div>
                    <img
                      src={require("../../../img/seine/saint-paul/saint-paul01min.jpg")}
                      alt="saint-paul"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_pierre_de_manneville}>
            <Popup minWidth={200}>
              <Link to="/saint-pierre-de-manneville" className="linkPlage">
                <div className="lien">
                  <div>Saint-Pierre-de-Manneville</div>
                  <div>
                    <img
                      src={require("../../../img/seine/saint-pierre-de-manneville/saint-pierre-de-manneville01min.jpg")}
                      alt="saint-pierre-de-manneville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={tancarville}>
            <Popup minWidth={200}>
              <Link to="/tancarville" className="linkPlage">
                <div className="lien">
                  <div>Tancarville</div>
                  <div>
                    <img
                      src={require("../../../img/seine/tancarville/tancarville01min.jpg")}
                      alt="tancarville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={val_de_la_haye}>
            <Popup minWidth={200}>
              <Link to="/val-de-la-haye" className="linkPlage">
                <div className="lien">
                  <div>Val-de-la-Haye</div>
                  <div>
                    <img
                      src={require("../../../img/seine/val-de-la-haye/val-de-la-haye01min.jpg")}
                      alt="val-de-la-haye"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villequier}>
            <Popup minWidth={200}>
              <Link to="/villequier" className="linkPlage">
                <div className="lien">
                  <div>Villequier</div>
                  <div>
                    <img
                      src={require("../../../img/seine/villequier/villequier01min.jpg")}
                      alt="villequier"
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
