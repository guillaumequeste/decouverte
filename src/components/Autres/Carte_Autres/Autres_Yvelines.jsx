import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Yvelines extends Component {
  render() {
    const versailles = [48.80503616157122, 2.119683843519584];

    return (
      <div>
          <Marker position={versailles}>
            <Popup minWidth={200}>
              <Link to="/versailles" className="linkPlage">
                <div className="lien">
                  <div>Château de Versailles</div>
                  <div>
                    <img
                      src={require("../../../img/autres/versailles/versailles01min.jpg")}
                      alt="versailles"
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
