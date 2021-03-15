import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Littoral_Ile_et_Vilaine extends Component {

  render() {
    const anse_du_guesclin = [48.69231065622321, -1.8973763511644703];
    const cancale1 = [48.66369968343838, -1.8643028286921037];
    const cancale2 = [48.676481779456324, -1.845632205145431];
    const saint_coulomb = [48.693198926016834, -1.9295290956908873];
    const pointe_de_la_varde = [48.70147380847198, -1.9358748350493493];
    const rotheneuf1 = [48.680868338445116, -1.9604745587421335];
    const rotheneuf2 = [48.6832773203941, -1.9726080880168295];
    const saint_malo1 = [48.656325556735034, -2.005520023452465];
    const saint_malo2 = [48.6491297044208, -2.0291133337202516];

    return (
      <div>
        <Marker position={anse_du_guesclin}>
            <Popup minWidth={200}>
              <Link to="/anse_du_guesclin" className="linkPlage">
                <div className="lien">
                  <div>Anse du Guesclin</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/anse_du_guesclin/anse_du_guesclin01min.jpg")}
                      alt="anse_du_guesclin"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cancale1}>
            <Popup minWidth={200}>
              <Link to="/cancale1" className="linkPlage">
                <div className="lien">
                  <div>Cancale (1)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/cancale1/cancale101min.jpg")}
                      alt="cancale1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cancale2}>
            <Popup minWidth={200}>
              <Link to="/cancale2" className="linkPlage">
                <div className="lien">
                  <div>Cancale (2)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/cancale2/cancale201min.jpg")}
                      alt="cancale2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pointe_de_la_varde}>
            <Popup minWidth={200}>
              <Link to="/pointe_de_la_varde" className="linkPlage">
                <div className="lien">
                  <div>Pointe de la Varde</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde01min.jpg")}
                      alt="pointe_de_la_varde"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={rotheneuf1}>
            <Popup minWidth={200}>
              <Link to="/rotheneuf1" className="linkPlage">
                <div className="lien">
                  <div>Rotheneuf (1)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/rotheneuf1/rotheneuf101min.jpg")}
                      alt="rotheneuf1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={rotheneuf2}>
            <Popup minWidth={200}>
              <Link to="/rotheneuf2" className="linkPlage">
                <div className="lien">
                  <div>Rotheneuf (2)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/rotheneuf2/rotheneuf201min.jpg")}
                      alt="rotheneuf2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_coulomb}>
            <Popup minWidth={200}>
              <Link to="/saint-coulomb" className="linkPlage">
                <div className="lien">
                  <div>Saint-Coulomb</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-coulomb/saint-coulomb01min.jpg")}
                      alt="saint-coulomb"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_malo1}>
            <Popup minWidth={200}>
              <Link to="/saint-malo1" className="linkPlage">
                <div className="lien">
                  <div>Saint-Malo (1)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-malo1/saint-malo101min.jpg")}
                      alt="saint-malo1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_malo2}>
            <Popup minWidth={200}>
              <Link to="/saint-malo2" className="linkPlage">
                <div className="lien">
                  <div>Saint-Malo (2)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-malo2/saint-malo201min.jpg")}
                      alt="saint-malo2"
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
