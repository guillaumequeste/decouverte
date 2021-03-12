import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Herault extends Component {
  render() {
    const lac_du_salagou = [43.65486516256189, 3.374581127555518];

    return (
      <div>
        <Marker position={lac_du_salagou}>
            <Popup minWidth={200}>
              <Link to="/lac_du_salagou" className="linkPlage">
                <div className="lien">
                  <div>Lac du Salagou</div>
                  <div>
                    <img
                      src={require("../../../img/autres/lac_du_salagou/lac_du_salagou01min.jpg")}
                      alt="lac_du_salagou"
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
