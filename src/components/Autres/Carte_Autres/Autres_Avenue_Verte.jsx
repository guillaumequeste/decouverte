import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Avenue_Verte extends Component {
  render() {
    const avenue_verte_arques = [49.874725744731734, 1.144591670209727];
    const avenue_verte_dampierre = [49.86053211973192, 1.1993901547966912];
    const avenue_verte_mesnieres = [49.76121475529929, 1.378964622259904];
    const avenue_verte_meulers = [49.849013904657475, 1.2152508596926648];
    const avenue_verte_osmoy = [49.79444326324918, 1.3227432047380594];
    const avenue_verte_saint_aubin_le_cauf = [
      49.867832893705945,
      1.1776762445261735
    ];
    const avenue_verte_saint_vaast = [49.81910677943631, 1.2588236235701933];

    return (
      <div>
        <Marker position={avenue_verte_arques}>
          <Popup minWidth={200}>
            <Link to="/avenue_verte_arques" className="linkPlage">
              <div className="lien">
                <div>Avenue verte Arques-la-Bataille</div>
                <div>
                  <img
                    src={require("../../../img/autres/avenue_verte_arques/avenue_verte_arques01min.jpg")}
                    alt="avenue_verte_arques"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={avenue_verte_dampierre}>
          <Popup minWidth={200}>
            <Link to="/avenue_verte_dampierre" className="linkPlage">
              <div className="lien">
                <div>Avenue verte Dampierre-Saint-Nicolas</div>
                <div>
                  <img
                    src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre01min.jpg")}
                    alt="avenue_verte_dampierre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={avenue_verte_mesnieres}>
          <Popup minWidth={200}>
            <Link to="/avenue_verte_mesnieres" className="linkPlage">
              <div className="lien">
                <div>Avenue verte Mesnières-en-Bray</div>
                <div>
                  <img
                    src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres01min.jpg")}
                    alt="avenue_verte_mesnieres"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={avenue_verte_meulers}>
          <Popup minWidth={200}>
            <Link to="/avenue_verte_meulers" className="linkPlage">
              <div className="lien">
                <div>Avenue verte Meulers</div>
                <div>
                  <img
                    src={require("../../../img/autres/avenue_verte_meulers/avenue_verte_meulers01min.jpg")}
                    alt="avenue_verte_meulers"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={avenue_verte_osmoy}>
          <Popup minWidth={200}>
            <Link to="/avenue_verte_osmoy" className="linkPlage">
              <div className="lien">
                <div>Avenue verte Osmoy-Saint-Valéry</div>
                <div>
                  <img
                    src={require("../../../img/autres/avenue_verte_osmoy/avenue_verte_osmoy01min.jpg")}
                    alt="avenue_verte_osmoy"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={avenue_verte_saint_aubin_le_cauf}>
          <Popup minWidth={200}>
            <Link to="/avenue_verte_saint-aubin-le-cauf" className="linkPlage">
              <div className="lien">
                <div>Avenue verte Saint-Aubin-le-Cauf</div>
                <div>
                  <img
                    src={require("../../../img/autres/avenue_verte_saint-aubin-le-cauf/avenue_verte_saint-aubin-le-cauf01min.jpg")}
                    alt="avenue_verte_saint-aubin-le-cauf"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={avenue_verte_saint_vaast}>
          <Popup minWidth={200}>
            <Link to="/avenue_verte_saint-vaast" className="linkPlage">
              <div className="lien">
                <div>Avenue verte Saint-Vaast-d'Equiqueville</div>
                <div>
                  <img
                    src={require("../../../img/autres/avenue_verte_saint-vaast/avenue_verte_saint-vaast01min.jpg")}
                    alt="avenue_verte_saint-vaast"
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
