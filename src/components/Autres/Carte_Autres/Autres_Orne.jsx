import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Orne extends Component {
  render() {
    const chateau_carrouges = [48.56009319147203, -0.15420978255463735];
    const haras_du_pin = [48.738893222298636, 0.14692422419713136];

    return (
      <div>
          <Marker position={chateau_carrouges}>
            <Popup minWidth={200}>
              <Link to="/chateau_carrouges" className="linkPlage">
                <div className="lien">
                  <div>Château de carrouges</div>
                  <div>
                    <img
                      src={require("../../../img/autres/chateau_carrouges/chateau_carrougesmin.jpg")}
                      alt="chateau_carrouges01min"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={haras_du_pin}>
            <Popup minWidth={200}>
              <Link to="/haras_du_pin" className="linkPlage">
                <div className="lien">
                  <div>Haras national du Pin</div>
                  <div>
                    <img
                      src={require("../../../img/autres/haras_du_pin/haras_du_pinmin.jpg")}
                      alt="haras_du_pinmin"
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
