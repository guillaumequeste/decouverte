import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Calvados extends Component {
  render() {
    const basilique_lisieux = [49.139556789525805, 0.23629679734376907];
    const tapisserie_bayeux = [49.274405158912934, -0.7003888434955718];

    return (
      <div>
          <Marker position={basilique_lisieux}>
            <Popup minWidth={200}>
              <Link to="/basilique_lisieux" className="linkPlage">
                <div className="lien">
                  <div>Basilique Sainte-Thérèse de Lisieux</div>
                  <div>
                    <img
                      src={require("../../../img/autres/basilique_lisieux/basilique_lisieux01min.jpg")}
                      alt="basilique_lisieux01"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={tapisserie_bayeux}>
            <Popup minWidth={200}>
              <Link to="/tapisserie_bayeux" className="linkPlage">
                <div className="lien">
                  <div>Tapisserie de Bayeux</div>
                  <div>
                    <img
                      src={require("../../../img/autres/tapisserie_bayeux/tapisserie_bayeux.png")}
                      alt="tapisserie_bayeux"
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
