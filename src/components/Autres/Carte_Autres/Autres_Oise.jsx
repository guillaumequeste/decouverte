import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Oise extends Component {
  render() {
    const cathedrale_beauvais = [49.43259468183312, 2.0813340770177735];
    const chateau_chantilly = [49.19403662095672, 2.4855468818245985];
    const chateau_pierrefonds = [49.34697909699972, 2.9799778488216466];
    const plan_eau_canada = [49.456879473483035, 2.0559077359983613];

    return (
      <div>
          <Marker position={cathedrale_beauvais}>
            <Popup minWidth={200}>
              <Link to="/cathedrale_beauvais" className="linkPlage">
                <div className="lien">
                  <div>Cathédrale Notre-Dame de Beauvais</div>
                  <div>
                    <img
                      src={require("../../../img/autres/cathedrale_beauvais/cathedrale_beauvais01min.jpg")}
                      alt="cathedrale_reims01min"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={chateau_chantilly}>
            <Popup minWidth={200}>
              <Link to="/chateau_chantilly" className="linkPlage">
                <div className="lien">
                  <div>Château de Chantilly</div>
                  <div>
                    <img
                      src={require("../../../img/autres/chateau_chantilly/chateau_chantillymin.jpg")}
                      alt="chateau_chantilly"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={chateau_pierrefonds}>
            <Popup minWidth={200}>
              <Link to="/chateau_pierrefonds" className="linkPlage">
                <div className="lien">
                  <div>Château de Pierrefonds</div>
                  <div>
                    <img
                      src={require("../../../img/autres/chateau_pierrefonds/chateau_pierrefonds.jpg")}
                      alt="chateau_pierrefonds"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={plan_eau_canada}>
            <Popup minWidth={200}>
              <Link to="/plan_eau_canada" className="linkPlage">
                <div className="lien">
                  <div>Plan d'eau du Canada</div>
                  <div>
                    <img
                      src={require("../../../img/autres/plan_eau_canada/plan_eau_canada01min.jpg")}
                      alt="plan_eau_canada"
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
