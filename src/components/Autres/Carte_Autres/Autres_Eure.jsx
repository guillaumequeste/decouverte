import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Eure extends Component {
  render() {
    const abbaye_notre_dame_du_bec = [49.22953974001412, 0.720553351057176];
    const chateau_harcourt = [49.17351250829536, 0.7872275764497649];
    const chateau_vascoeuil = [49.44667305520199, 1.3786565396338535];
    const domaine_du_champ_de_bataille = [
        49.168025480627925,
        0.8590760530616404
      ];
    const giverny = [49.0753489, 1.5337884];
    const le_bec_hellouin = [49.2312413, 0.7210184];
    const panorama_evreux = [49.03194252699784, 1.147213258187909];
    const panorama_marais_vernier = [49.402871672725254, 0.4678151817346565];
    const panorama_vert_village = [49.00129340278666, 1.0921865534499275];

    return (
      <div>
          <Marker position={abbaye_notre_dame_du_bec}>
            <Popup minWidth={200}>
              <Link to="/abbaye_notre-dame_du_bec" className="linkPlage">
                <div className="lien">
                  <div>Abbaye Notre-Dame du Bec</div>
                  <div>
                    <img
                      src={require("../../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec01min.jpg")}
                      alt="abbaye_notre-dame_du_bec"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={chateau_harcourt}>
            <Popup minWidth={200}>
              <Link to="/chateau_harcourt" className="linkPlage">
                <div className="lien">
                  <div>Château d'Harcourt</div>
                  <div>
                    <img
                      src={require("../../../img/autres/chateau_harcourt/chateau_harcourtmin.jpg")}
                      alt="chateau_harcourt"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={chateau_vascoeuil}>
            <Popup minWidth={200}>
              <Link to="/chateau_vascoeuil" className="linkPlage">
                <div className="lien">
                  <div>Château de Vascoeuil</div>
                  <div>
                    <img
                      src={require("../../../img/autres/chateau_vascoeuil/chateau_vascoeuilmin.jpg")}
                      alt="chateau_vascoeuil"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={domaine_du_champ_de_bataille}>
            <Popup minWidth={200}>
              <Link to="/domaine_du_champ_de_bataille" className="linkPlage">
                <div className="lien">
                  <div>Domaine du Champ de Bataille</div>
                  <div>
                    <img
                      src={require("../../../img/autres/domaine_du_champ_de_bataille/domaine_du_champ_de_bataillemin.jpg")}
                      alt="domaine_du_champ_de_bataille"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={giverny}>
            <Popup minWidth={200}>
              <Link to="/giverny" className="linkPlage">
                <div className="lien">
                  <div>Fondation Claude Monet (Giverny)</div>
                  <div>
                    <img
                      src={require("../../../img/autres/giverny/giverny.jpg")}
                      alt="giverny"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_bec_hellouin}>
            <Popup minWidth={200}>
              <Link to="/le_bec-hellouin" className="linkPlage">
                <div className="lien">
                  <div>Le Bec-Hellouin</div>
                  <div>
                    <img
                      src={require("../../../img/autres/le_bec-hellouin/le_bec-hellouin01min.jpg")}
                      alt="e_bec-hellouin"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={panorama_evreux}>
            <Popup minWidth={200}>
              <Link to="/panorama_evreux" className="linkPlage">
                <div className="lien">
                  <div>Panorama d'Evreux</div>
                  <div>
                    <img
                      src={require("../../../img/autres/panorama_evreux/panorama_evreux01min.jpg")}
                      alt="panorama_evreux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={panorama_marais_vernier}>
            <Popup minWidth={200}>
              <Link to="/panorama_marais_vernier" className="linkPlage">
                <div className="lien">
                  <div>Panorama du Marais Vernier</div>
                  <div>
                    <img
                      src={require("../../../img/autres/panorama_marais_vernier/panorama_marais_vernier01min.jpg")}
                      alt="panorama_marais_vernier"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={panorama_vert_village}>
            <Popup minWidth={200}>
              <Link to="/panorama_vert_village" className="linkPlage">
                <div className="lien">
                  <div>Panorama du Vert Village</div>
                  <div>
                    <img
                      src={require("../../../img/autres/panorama_vert_village/panorama_vert_village01min.jpg")}
                      alt="panorama_vert_village"
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
