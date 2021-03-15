import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Marne extends Component {
  render() {
    const cathedrale_reims = [49.25379938340183, 4.0341799204409545];
    const champagne_lanson = [49.24297648429447, 4.020384962519099];

    return (
      <div>
        <Marker position={cathedrale_reims}>
            <Popup minWidth={200}>
              <Link to="/cathedrale_reims" className="linkPlage">
                <div className="lien">
                  <div>Cathédrale Notre-Dame de Reims</div>
                  <div>
                    <img
                      src={require("../../../img/autres/cathedrale_reims/cathedrale_reims01min.jpg")}
                      alt="cathedrale_reims"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={champagne_lanson}>
            <Popup minWidth={200}>
              <Link to="/champagne_lanson" className="linkPlage">
                <div className="lien">
                  <div>Champagne Lanson</div>
                  <div>
                    <img
                      src={require("../../../img/autres/champagne_lanson/maison_lanson.jpg")}
                      alt="maison_lanson"
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
