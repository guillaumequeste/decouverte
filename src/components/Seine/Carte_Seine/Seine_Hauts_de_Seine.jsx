import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Seine_Hauts_de_Seine extends Component {

  render() {
    const nanterre = [48.91719621975756, 2.2173717836551576];
    const pont_saint_cloud = [48.841301752318536, 2.2235902795146423];

    return (
      <div>
          <Marker position={nanterre}>
            <Popup minWidth={200}>
              <Link to="/nanterre" className="linkPlage">
                <div className="lien">
                  <div>Nanterre</div>
                  <div>
                    <img
                      src={require("../../../img/seine/nanterre/nanterre01min.jpg")}
                      alt="nanterre"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pont_saint_cloud}>
            <Popup minWidth={200}>
              <Link to="/pont_saint-cloud" className="linkPlage">
                <div className="lien">
                  <div>Pont de Saint-Cloud</div>
                  <div>
                    <img
                      src={require("../../../img/seine/pont_saint-cloud/pont_saint-cloud01min.jpg")}
                      alt="pont_saint-cloud"
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
