import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Pas_de_Calais extends Component {
  render() {
    const louvre_lens = [50.43102498443043, 2.804400393625519];
    const montreuil_sur_mer = [50.46658643355182, 1.7603227017118916];
    const stade_bollaert = [50.43291750535506, 2.815122291276202];

    return (
      <div>
        <Marker position={louvre_lens}>
            <Popup minWidth={200}>
              <Link to="/louvre-lens" className="linkPlage">
                <div className="lien">
                  <div>Musée du Louvre-Lens</div>
                  <div>
                    <img
                      src={require("../../../img/autres/louvre-lens/louvre-lens.jpeg")}
                      alt="louvre-lens"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={montreuil_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/montreuil-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Montreuil-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer01min.jpg")}
                      alt="montreuil-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={stade_bollaert}>
            <Popup minWidth={200}>
              <Link to="/stade_bollaert" className="linkPlage">
                <div className="lien">
                  <div>Stade Bollaert_Delelis</div>
                  <div>
                    <img
                      src={require("../../../img/autres/stade_bollaert/stade_bollaert.jpeg")}
                      alt="stade_bollaert"
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
