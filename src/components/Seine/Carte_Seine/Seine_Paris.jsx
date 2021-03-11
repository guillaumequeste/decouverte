import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Seine_Paris extends Component {

  render() {
    const ile_cite = [48.855910041518655, 2.3443539925747414];
    const ile_saint_louis = [48.851763743343156, 2.357079065869625];
    const notre_dame = [48.85297093349124, 2.349745636990672];
    const pont_au_change = [48.856664448657654, 2.346722409591049];
    const pont_charles_de_gaulle = [48.842592621958296, 2.3690977001586155];
    const pont_de_sully = [48.84990140647367, 2.358337923076781];
    const pont_d_iena = [48.85977066070461, 2.292117746632192];
    const pont_du_garigliano = [48.83924816252435, 2.2684471491681624];
    const pont_marie = [48.852798887464836, 2.357380669330671];
    const pont_national = [48.82784464797287, 2.3869750071940654];
    const pont_neuf = [48.85767502321728, 2.3418120562873224];
    const pont_saint_louis = [48.852736412536544, 2.3528050596371353];

    return (
      <div>
          <Marker position={ile_cite}>
            <Popup minWidth={200}>
              <Link to="/ile_cite" className="linkPlage">
                <div className="lien">
                  <div>Ile de la Cité</div>
                  <div>
                    <img
                      src={require("../../../img/seine/ile_cite/ile_cite01min.jpg")}
                      alt="ile_cite"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={ile_saint_louis}>
            <Popup minWidth={200}>
              <Link to="/ile_saint-louis" className="linkPlage">
                <div className="lien">
                  <div>Ile Saint-Louis</div>
                  <div>
                    <img
                      src={require("../../../img/seine/ile_saint-louis/ile_saint-louis01min.jpg")}
                      alt="ile_saint-louis"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={notre_dame}>
            <Popup minWidth={200}>
              <Link to="/notre_dame" className="linkPlage">
                <div className="lien">
                  <div>Notre Dame</div>
                  <div>
                    <img
                      src={require("../../../img/seine/notre_dame/notre_dame01min.jpg")}
                      alt="notre_dame"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_au_change}>
            <Popup minWidth={200}>
              <Link to="/pont_au_change" className="linkPlage">
                <div className="lien">
                  <div>Pont au Change</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_au_change/pont_au_change01min.jpg")}
                      alt="pont_au_change"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_charles_de_gaulle}>
            <Popup minWidth={200}>
              <Link to="/pont_charles_de_gaulle" className="linkPlage">
                <div className="lien">
                  <div>Pont Charles de Gaulle</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_charles_de_gaulle/pont_charles_de_gaulle01min.jpg")}
                      alt="pont_charles_de_gaulle"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_de_sully}>
            <Popup minWidth={200}>
              <Link to="/pont_de_sully" className="linkPlage">
                <div className="lien">
                  <div>Pont de Sully</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_de_sully/pont_de_sully01min.jpg")}
                      alt="pont_de_sully"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_d_iena}>
            <Popup minWidth={200}>
              <Link to="/pont_d_iena" className="linkPlage">
                <div className="lien">
                  <div>Pont d'Iena</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_d_iena/pont_d_iena01min.jpg")}
                      alt="pont_d_iena"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_du_garigliano}>
            <Popup minWidth={200}>
              <Link to="/pont_du_garigliano" className="linkPlage">
                <div className="lien">
                  <div>Pont du Garigliano</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_du_garigliano/pont_du_garigliano01min.jpg")}
                      alt="pont_du_garigliano"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_marie}>
            <Popup minWidth={200}>
              <Link to="/pont_marie" className="linkPlage">
                <div className="lien">
                  <div>Pont Marie</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_marie/pont_marie01min.jpg")}
                      alt="pont_marie"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_national}>
            <Popup minWidth={200}>
              <Link to="/pont_national" className="linkPlage">
                <div className="lien">
                  <div>Pont National</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_national/pont_national01min.jpg")}
                      alt="pont_national"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_neuf}>
            <Popup minWidth={200}>
              <Link to="/pont_neuf" className="linkPlage">
                <div className="lien">
                  <div>Pont Neuf</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_neuf/pont_neuf01min.jpg")}
                      alt="pont_neuf"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_saint_louis}>
            <Popup minWidth={200}>
              <Link to="/pont_saint-louis" className="linkPlage">
                <div className="lien">
                  <div>Pont Saint-Louis</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_saint-louis/pont_saint-louis01min.jpg")}
                      alt="pont_saint-louis"
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
