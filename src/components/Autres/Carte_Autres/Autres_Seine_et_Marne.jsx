import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Seine_et_Marne extends Component {
  render() {
    const chateau_fontainebleau = [48.40181464878997, 2.69947521185792];

    return (
      <div>
          <Marker position={chateau_fontainebleau}>
            <Popup minWidth={200}>
              <Link to="/chateau_fontainebleau" className="linkPlage">
                <div className="lien">
                  <div>Château de Fontainebleau</div>
                  <div>
                    <img
                      src={require("../../../img/autres/chateau_fontainebleau/chateau_fontainebleau01min.jpg")}
                      alt="chateau_fontainebleau"
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
