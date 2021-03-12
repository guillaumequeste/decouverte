import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Gard extends Component {
  render() {
    const pont_du_gard = [43.947331125316595, 4.535250957779171];

    return (
      <div>
          <Marker position={pont_du_gard}>
            <Popup minWidth={200}>
              <Link to="/pont_du_gard" className="linkPlage">
                <div className="lien">
                  <div>Pont du Gard</div>
                  <div>
                    <img
                      src={require("../../../img/autres/pont_du_gard/pont_du_gard01min.jpg")}
                      alt="pont_du_gard01min"
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
