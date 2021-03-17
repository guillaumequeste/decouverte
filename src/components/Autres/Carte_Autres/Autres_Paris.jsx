import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Paris extends Component {
  render() {
    const arc_de_triomphe = [48.873786710287305, 2.2949454855619233];

    return (
      <div>
          <Marker position={arc_de_triomphe}>
            <Popup minWidth={200}>
              <Link to="/arc_de_triomphe" className="linkPlage">
                <div className="lien">
                  <div>Arc de Triomphe</div>
                  <div>
                    <img
                      src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
                      alt="arc_de_triomphe"
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
