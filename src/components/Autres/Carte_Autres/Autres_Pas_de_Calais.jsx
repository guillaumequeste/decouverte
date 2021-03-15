import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Pas_de_Calais extends Component {
  render() {
    const montreuil_sur_mer = [50.46658643355182, 1.7603227017118916];

    return (
      <div>
          <Marker position={montreuil_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/montreuil-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Montreuil-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer01min.jpg")}
                      alt="montreuil-sur-mer"
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
