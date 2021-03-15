import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Littoral_Gironde extends Component {

  render() {
    const dune_du_pilat = [44.591029454820834, -1.2126978211500505];

    return (
      <div>
        <Marker position={dune_du_pilat}>
            <Popup minWidth={200}>
              <Link to="/dune_du_pilat" className="linkPlage">
                <div className="lien">
                  <div>Dune du Pilat</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat01min.jpg")}
                      alt="dune_du_pilat"
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
