import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Val_d_Oise extends Component {
  render() {
    const auvers_sur_oise = [49.0701875, 2.1718687];

    return (
      <div>
          <Marker position={auvers_sur_oise}>
            <Popup minWidth={200}>
              <Link to="/auvers-sur-oise" className="linkPlage">
                <div className="lien">
                  <div>Auvers-sur-Oise</div>
                  <div>
                    <img
                      src={require("../../../img/autres/auvers-sur-oise/auvers-sur-oise01min.jpg")}
                      alt="auvers-sur-oise"
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
