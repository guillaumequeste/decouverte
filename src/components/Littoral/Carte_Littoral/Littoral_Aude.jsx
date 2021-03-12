import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Littoral_Aude extends Component {

  render() {
    const narbonne = [43.16797895363645, 3.1837595415781017];

    return (
      <div>
        <Marker position={narbonne}>
            <Popup minWidth={200}>
              <Link to="/narbonne" className="linkPlage">
                <div className="lien">
                  <div>Narbonne</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/narbonne/narbonne01min.jpg")}
                      alt="narbonne"
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
