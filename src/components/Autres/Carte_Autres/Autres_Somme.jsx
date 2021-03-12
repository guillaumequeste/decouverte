import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Somme extends Component {
  render() {
    const cathedrale_amiens = [49.894544762202585, 2.302213976161882];
    const hortillonnages = [49.8948700325477, 2.3124191947304062];
    const maison_jules_verne = [49.887827381264636, 2.3017851790421906];
    const quartier_saint_leu = [49.897365617337606, 2.304579209878246];

    return (
      <div>
          <Marker position={cathedrale_amiens}>
            <Popup minWidth={200}>
              <Link to="/cathedrale_amiens" className="linkPlage">
                <div className="lien">
                  <div>Cathédrale Notre-Dame d'Amiens</div>
                  <div>
                    <img
                      src={require("../../../img/autres/cathedrale_amiens/cathedrale_amiens01min.jpg")}
                      alt="cathedrale_amiens01"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={hortillonnages}>
            <Popup minWidth={200}>
              <Link to="/hortillonnages" className="linkPlage">
                <div className="lien">
                  <div>Hortillonnages d'Amiens</div>
                  <div>
                    <img
                      src={require("../../../img/autres/hortillonnages/hortillonnages01min.jpg")}
                      alt="hortillonnages"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={maison_jules_verne}>
            <Popup minWidth={200}>
              <Link to="/maison_jules_verne" className="linkPlage">
                <div className="lien">
                  <div>Maison de Jules Verne</div>
                  <div>
                    <img
                      src={require("../../../img/autres/maison_jules_verne/maison_jules_verne01min.jpg")}
                      alt="maison_jules_verne"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={quartier_saint_leu}>
            <Popup minWidth={200}>
              <Link to="/quartier_saint-leu" className="linkPlage">
                <div className="lien">
                  <div>Quartier Saint-Leu</div>
                  <div>
                    <img
                      src={require("../../../img/autres/quartier_saint-leu/quartier_saint-leu01min.jpg")}
                      alt="quartier_saint-leu"
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
