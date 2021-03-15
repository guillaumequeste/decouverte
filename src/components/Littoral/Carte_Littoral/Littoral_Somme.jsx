import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Littoral_Somme extends Component {

  render() {
    const ault = [50.1015635, 1.4473006];
    const baie = [50.2125115163148, 1.6683178464456194];
    const cayeux = [50.1792004, 1.4933839];
    const fort_mahon = [50.3414288, 1.5683131];
    const le_bois_de_cise = [50.08914499767833, 1.4244834055121158];
    const le_crotoy = [50.2165693, 1.624047];
    const le_hourdel = [50.2147829, 1.5647525];
    const mers = [50.0656325, 1.3889703];
    const quend = [50.322829094686696, 1.5461341515583582];
    const saint_valery_sur_somme = [50.1887006, 1.6279147];

    return (
      <div>
        <Marker position={ault}>
            <Popup minWidth={200}>
              <Link to="/ault" className="linkPlage">
                <div className="lien">
                  <div>Ault</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/ault/ault01min.jpg")}
                      alt="ault"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        <Marker position={baie}>
            <Popup minWidth={200}>
              <Link to="/baie_de_somme" className="linkPlage">
                <div className="lien">
                  <div>Baie de Somme</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/baie/baie01min.jpg")}
                      alt="baie"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cayeux}>
            <Popup minWidth={200}>
              <Link to="/cayeux" className="linkPlage">
                <div className="lien">
                  <div>Cayeux-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/cayeux/cayeux01min.jpg")}
                      alt="cayeux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={fort_mahon}>
            <Popup minWidth={200}>
              <Link to="/fort-mahon" className="linkHippodrome">
                <div className="lien">
                  <div>Fort-Mahon-Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/fort-mahon/fort-mahon01min.jpg")}
                      alt="fort-mahon"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_bois_de_cise}>
            <Popup minWidth={200}>
              <Link to="/le_bois_de_cise" className="linkHippodrome">
                <div className="lien">
                  <div>Le Bois de Cise</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/le_bois_de_cise/le_bois_de_cise01min.jpg")}
                      alt="le_bois_de_cise"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_crotoy}>
            <Popup minWidth={200}>
              <Link to="/le_crotoy" className="linkHippodrome">
                <div className="lien">
                  <div>Le Crotoy</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/le_crotoy/le_crotoy01min.jpg")}
                      alt="le_crotoy"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_hourdel}>
            <Popup minWidth={200}>
              <Link to="/le_hourdel" className="linkHippodrome">
                <div className="lien">
                  <div>Le Hourdel</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/le_hourdel/le_hourdel01min.jpg")}
                      alt="le_hourdel"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={mers}>
            <Popup minWidth={200}>
              <Link to="/mers" className="linkHippodrome">
                <div className="lien">
                  <div>Mers-les-Bains</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/mers/mers01min.jpg")}
                      alt="mers"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={quend}>
            <Popup minWidth={200}>
              <Link to="/quend" className="linkHippodrome">
                <div className="lien">
                  <div>Quend</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/quend/quend01min.jpg")}
                      alt="quend"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_valery_sur_somme}>
            <Popup minWidth={200}>
              <Link to="/saint-valery-sur-somme" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Valéry-sur-Somme</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme01min.jpg")}
                      alt="saint-valery-sur-somme"
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
