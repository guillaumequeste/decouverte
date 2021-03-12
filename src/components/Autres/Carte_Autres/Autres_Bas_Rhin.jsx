import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Bas_Rhin extends Component {
  render() {
    const petite_france = [48.58068798375643, 7.741254297467077];

    return (
      <div>
          <Marker position={petite_france}>
            <Popup minWidth={200}>
              <Link to="/petite_france" className="linkPlage">
                <div className="lien">
                  <div>Petite France</div>
                  <div>
                    <img
                      src={require("../../../img/autres/petite_france/petite_france_min.jpg")}
                      alt="petite_france"
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
