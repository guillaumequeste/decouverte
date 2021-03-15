import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Seine_Calvados extends Component {

  render() {
    const honfleur = [49.422389300892156, 0.23574543158495942];
    const honfleur_plage = [49.42534367948838, 0.21386837838599515];
    const honfleur_point_de_vue = [49.42342113122669, 0.22198009090871995];
    const honfleur_zone_portuaire = [49.427957553128806, 0.25221513718679756];
    const la_vacquerie = [49.44729478584017, 0.652205264487602];
    const panorama_du_mont_joli = [49.42021262381745, 0.22531378906144983];

    return (
      <div>
          <Marker position={honfleur}>
            <Popup minWidth={200}>
              <Link to="/honfleur" className="linkPlage">
                <div className="lien">
                  <div>Honfleur</div>
                  <div>
                    <img
                      src={require("../../../img/seine/honfleur/honfleur01min.jpg")}
                      alt="honfleur"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={honfleur_plage}>
            <Popup minWidth={200}>
              <Link to="/honfleur_plage" className="linkPlage">
                <div className="lien">
                  <div>Honfleur plage</div>
                  <div>
                    <img
                      src={require("../../../img/seine/honfleur_plage/honfleur_plage01min.jpg")}
                      alt="honfleur_plage"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={honfleur_point_de_vue}>
            <Popup minWidth={200}>
              <Link to="/honfleur_point_de_vue" className="linkPlage">
                <div className="lien">
                  <div>Honfleur point de vue</div>
                  <div>
                    <img
                      src={require("../../../img/seine/honfleur_point_de_vue/honfleur_point_de_vue01min.jpg")}
                      alt="honfleur_point_de_vue"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={honfleur_zone_portuaire}>
            <Popup minWidth={200}>
              <Link to="/honfleur_zone_portuaire" className="linkPlage">
                <div className="lien">
                  <div>Honfleur zone portuaire</div>
                  <div>
                    <img
                      src={require("../../../img/seine/honfleur_zone_portuaire/honfleur_zone_portuaire01min.jpg")}
                      alt="honfleur_zone_portuaire"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={la_vacquerie}>
            <Popup minWidth={200}>
              <Link to="/la_vacquerie" className="linkPlage">
                <div className="lien">
                  <div>La Vacquerie</div>
                  <div>
                    <img
                      src={require("../../../img/seine/la_vacquerie/la_vacquerie01min.jpg")}
                      alt="la_vacquerie"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={panorama_du_mont_joli}>
            <Popup minWidth={200}>
              <Link to="/panorama_du_mont_joli" className="linkPlage">
                <div className="lien">
                  <div>Panorama du Mont Joli</div>
                  <div>
                    <img
                      src={require("../../../img/seine/panorama_du_mont_joli/panorama_du_mont_joli01min.jpg")}
                      alt="panorama_du_mont_joli"
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
