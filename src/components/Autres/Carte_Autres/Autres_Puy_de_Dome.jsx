import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Puy_de_Dome extends Component {
  render() {
    const puy_de_dome = [45.772334863043476, 2.9639319409802134];

    return (
      <div>
          <Marker position={puy_de_dome}>
            <Popup minWidth={200}>
              <Link to="/puy_de_dome" className="linkPlage">
                <div className="lien">
                  <div>Puy de Dôme</div>
                  <div>
                    <img
                      src={require("../../../img/autres/puy_de_dome/puy_de_dome01min.jpg")}
                      alt="puy_de_dome01min"
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
