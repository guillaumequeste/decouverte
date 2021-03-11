import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Littoral_Pas_de_Calais extends Component {

  render() {
    const berck = [50.4052576, 1.5711617];
    const boulogne = [50.7259985, 1.6118771];
    const equihen = [50.679393, 1.5716648];
    const etaples = [50.5139552, 1.6386252];
    const hardelot = [50.6338762, 1.5778096];
    const le_touquet = [50.5211202, 1.5909325];
    const merlimont = [50.46385577068915, 1.5724817589914064];
    const sainte_cecile = [50.5747158, 1.5826268];
    const stella = [50.4799397, 1.577138];
    const wimereux = [50.7696858, 1.6118608];

    return (
      <div>
          <Marker position={berck}>
            <Popup minWidth={200}>
              <Link to="/berck" className="linkPlage">
                <div className="lien">
                  <div>Berck</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/berck/berck01min.jpg")}
                      alt="berck"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={boulogne}>
            <Popup minWidth={200}>
              <Link to="/boulogne" className="linkPlage">
                <div className="lien">
                  <div>Boulogne-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/boulogne/boulogne01min.jpg")}
                      alt="boulogne"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={equihen}>
            <Popup minWidth={200}>
              <Link to="/equihen" className="linkHippodrome">
                <div className="lien">
                  <div>Equihen-Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/equihen/equihen01min.jpg")}
                      alt="equihen"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={etaples}>
            <Popup minWidth={200}>
              <Link to="/etaples" className="linkHippodrome">
                <div className="lien">
                  <div>Etaples</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/etaples/etaples01min.jpg")}
                      alt="etaples"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={hardelot}>
            <Popup minWidth={200}>
              <Link to="/hardelot" className="linkHippodrome">
                <div className="lien">
                  <div>Hardelot-Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/hardelot/hardelot01min.jpg")}
                      alt="hardelot"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_touquet}>
            <Popup minWidth={200}>
              <Link to="/le_touquet" className="linkHippodrome">
                <div className="lien">
                  <div>Le Touquet-Paris-Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/le_touquet/le_touquet01min.jpg")}
                      alt="le_touquet"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={merlimont}>
            <Popup minWidth={200}>
              <Link to="/merlimont" className="linkHippodrome">
                <div className="lien">
                  <div>Merlimont-Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/merlimont/merlimont01min.jpg")}
                      alt="merlimont"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sainte_cecile}>
            <Popup minWidth={200}>
              <Link to="/sainte-cecile_plage" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Cécile Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/sainte-cecile/sainte-cecile01min.jpg")}
                      alt="saint-cecile"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={stella}>
            <Popup minWidth={200}>
              <Link to="/stella" className="linkHippodrome">
                <div className="lien">
                  <div>Stella-Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/stella/stella01min.jpg")}
                      alt="stella"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={wimereux}>
            <Popup minWidth={200}>
              <Link to="/wimereux" className="linkHippodrome">
                <div className="lien">
                  <div>Wimereux</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/wimereux/wimereux01min.jpg")}
                      alt="wimereux"
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
