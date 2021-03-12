import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Seine_Maritime extends Component {
  render() {
    const abbaye_mortemer = [49.369224896866555, 1.4805959564468152];
    const abbaye_saint_georges_boscherville = [
        49.44422912597656,
        0.9642863273620605
      ];
    const biomarine = [49.922020903359154, 1.0719482754901533];
    const cathedrale_rouen = [49.442550390837766, 1.099799646516808];
    const chateau_dieppe = [49.9246285256642, 1.070147852545782];
    const cimetiere_des_canadiens = [49.89598399948992, 1.0678900255719181];
    const eglise_saint_joseph = [49.49094960069601, 0.10123783788756668];
    const estran = [49.93065912643744, 1.083684613302509];
    const gros_horloge = [49.44151701844756, 1.0912492166726517];
    const le_sentier_du_verger = [49.803514393904294, 1.1779511566367296];
    const lillebonne = [49.51799724241, 0.5367753386982388];
    const manoir_ango = [49.9007992793442, 0.9949236699621933];
    const memorial = [49.92534223326355, 1.0719519517528875];
    const musee_beaux_arts = [49.444775046574925, 1.0945558547973633];
    const musee_emma_bovary = [49.472504641012726, 1.3441478694678821];
    const panorama_xxl = [49.442203334431795, 1.0765784564376446];
    const phare_d_ailly = [49.91589152840033, 0.9587284896833781];
    const varenne = [49.868665986725816, 1.1579329075862077];

    return (
      <div>
          <Marker position={abbaye_mortemer}>
            <Popup minWidth={200}>
              <Link to="/abbaye_mortemer" className="linkPlage">
                <div className="lien">
                  <div>Abbaye de Mortemer</div>
                  <div>
                    <img
                      src={require("../../../img/autres/abbaye_mortemer/abbaye_mortemermin.jpg")}
                      alt="abbaye_mortemer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={abbaye_saint_georges_boscherville}>
            <Popup minWidth={200}>
              <Link
                to="/abbaye_saint_georges_boscherville"
                className="linkPlage"
              >
                <div className="lien">
                  <div>Abbaye Romane Saint Georges de Boscherville</div>
                  <div>
                    <img
                      src={require("../../../img/autres/abbaye_saint_georges_boscherville/abbaye_saint_georges_boschervillemin.jpg")}
                      alt="abbaye_saint_georges_boscherville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={biomarine}>
          <Popup minWidth={200}>
            <Link to="/biomarine" className="linkPlage">
              <div className="lien">
                <div>Biomarine</div>
                <div>
                  <img
                    src={require("../../../img/autres/biomarine/biomarine01min.jpg")}
                    alt="biomarine01"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={cathedrale_rouen}>
            <Popup minWidth={200}>
              <Link to="/cathedrale_rouen" className="linkPlage">
                <div className="lien">
                  <div>Cathédrale Notre-Dame de Rouen</div>
                  <div>
                    <img
                      src={require("../../../img/autres/cathedrale_rouen/cathedrale_rouen01.jpg")}
                      alt="cathedrale_rouen01"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={chateau_dieppe}>
            <Popup minWidth={200}>
              <Link to="/chateau_dieppe" className="linkPlage">
                <div className="lien">
                  <div>Château de Dieppe</div>
                  <div>
                    <img
                      src={require("../../../img/autres/chateau_dieppe/chateau_dieppemin.jpg")}
                      alt="chateau_dieppe"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={cimetiere_des_canadiens}>
          <Popup minWidth={200}>
            <Link to="/cimetiere_des_canadiens" className="linkPlage">
              <div className="lien">
                <div>Cimetière des Canadiens</div>
                <div>
                  <img
                    src={require("../../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens01min.jpg")}
                    alt="cimetiere_des_canadiens"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={eglise_saint_joseph}>
            <Popup minWidth={200}>
              <Link to="/eglise_saint-joseph" className="linkPlage">
                <div className="lien">
                  <div>Eglise Saint-Joseph du Havre</div>
                  <div>
                    <img
                      src={require("../../../img/autres/eglise_saint-joseph/eglise_saint-joseph01min.jpg")}
                      alt="eglise_saint-joseph"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={estran}>
            <Popup minWidth={200}>
              <Link to="/estran" className="linkPlage">
                <div className="lien">
                  <div>Estran Cité de la Mer</div>
                  <div>
                    <img
                      src={require("../../../img/autres/estran/estran.jpeg")}
                      alt="estran"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={musee_emma_bovary}>
            <Popup minWidth={200}>
              <Link to="/musee_emma_bovary" className="linkPlage">
                <div className="lien">
                  <div>Galerie Bovary - Musée d'automates</div>
                  <div>
                    <img
                      src={require("../../../img/autres/musee_emma_bovary/musee_emma_bovary01min.jpg")}
                      alt="musee_emma_bovary"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={varenne}>
            <Popup minWidth={200}>
              <Link to="/varenne" className="linkPlage">
                <div className="lien">
                  <div>La Varenne</div>
                  <div>
                    <img
                      src={require("../../../img/autres/varenne/varenne01min.jpg")}
                      alt="varenne"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={gros_horloge}>
            <Popup minWidth={200}>
              <Link to="/gros-horloge" className="linkPlage">
                <div className="lien">
                  <div>Le Gros-Horloge à Rouen</div>
                  <div>
                    <img
                      src={require("../../../img/autres/gros-horloge/gros-horlogemin.jpg")}
                      alt="gros-horloge"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_sentier_du_verger}>
            <Popup minWidth={200}>
              <Link to="/le_sentier_du_verger" className="linkPlage">
                <div className="lien">
                  <div>Le Sentier du Verger</div>
                  <div>
                    <img
                      src={require("../../../img/autres/le_sentier_du_verger/le_sentier_du_verger01min.jpg")}
                      alt="le_sentier_du_verger"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={manoir_ango}>
            <Popup minWidth={200}>
              <Link to="/manoir_ango" className="linkPlage">
                <div className="lien">
                  <div>Manoir d'Ango</div>
                  <div>
                    <img
                      src={require("../../../img/autres/manoir_ango/manoir_ango.jpeg")}
                      alt="manoir_ango"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={memorial}>
            <Popup minWidth={200}>
              <Link to="/memorial" className="linkPlage">
                <div className="lien">
                  <div>Mémorial du 19 août 1942</div>
                  <div>
                    <img
                      src={require("../../../img/autres/memorial/memorial01min.jpg")}
                      alt="memorial"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={musee_beaux_arts}>
            <Popup minWidth={200}>
              <Link to="/musee_beaux_arts" className="linkPlage">
                <div className="lien">
                  <div>Musée des Beaux Arts</div>
                  <div>
                    <img
                      src={require("../../../img/autres/musee_beaux_arts/musee_beaux_arts01min.jpg")}
                      alt="musee_beaux_arts"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={panorama_xxl}>
            <Popup minWidth={200}>
              <Link to="/panorama_xxl" className="linkPlage">
                <div className="lien">
                  <div>Panorama XXL</div>
                  <div>
                    <img
                      src={require("../../../img/autres/panorama_xxl/panorama_xxlmin.jpg")}
                      alt="panorama_xxl"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={phare_d_ailly}>
          <Popup minWidth={200}>
            <Link to="/phare_d_ailly" className="linkPlage">
              <div className="lien">
                <div>Phare d'Ailly</div>
                <div>
                  <img
                    src={require("../../../img/autres/phare_d_ailly/phare_d_ailly01min.jpg")}
                    alt="phare_d_ailly"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={lillebonne}>
            <Popup minWidth={200}>
              <Link to="/lillebonne" className="linkPlage">
                <div className="lien">
                  <div>Théâtre romain de Lillebonne</div>
                  <div>
                    <img
                      src={require("../../../img/autres/lillebonne/lillebonne01min.jpg")}
                      alt="lillebonne"
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
