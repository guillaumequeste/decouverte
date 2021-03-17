import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Paris extends Component {
  render() {
    const arc_de_triomphe = [48.873786710287305, 2.2949454855619233];
    const arenes_lutece = [48.845102778773175, 2.3528522878357307];
    const basilique_saint_denis = [48.93544539130951, 2.3597294082122744];
    const bnf = [48.83399819829469, 2.3761074661315433];
    const buttes_chaumont = [48.8776770998102, 2.3799030008548243];
    const carrousel_louvre = [48.8628, 2.3348399999999856];
    const catacombes = [48.833964, 2.3324924];

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
          <Marker position={arenes_lutece}>
            <Popup minWidth={200}>
              <Link to="/arenes_lutece" className="linkPlage">
                <div className="lien">
                  <div>Arènes de Lutèce</div>
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
          <Marker position={basilique_saint_denis}>
            <Popup minWidth={200}>
              <Link to="/basilique_saint-denis" className="linkPlage">
                <div className="lien">
                  <div>Basilique Saint-Denis</div>
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
          <Marker position={bnf}>
            <Popup minWidth={200}>
              <Link to="/bnf" className="linkPlage">
                <div className="lien">
                  <div>Bibliothèque nationale de France</div>
                  <div>
                    <img
                      src={require("../../../img/autres/bnf/bnf.jpeg")}
                      alt="bnf"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={buttes_chaumont}>
            <Popup minWidth={200}>
              <Link to="/buttes_chaumont" className="linkPlage">
                <div className="lien">
                  <div>Parc des Buttes-Chaumont</div>
                  <div>
                    <img
                      src={require("../../../img/autres/bnf/bnf.jpeg")}
                      alt="bnf"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={carrousel_louvre}>
            <Popup minWidth={200}>
              <Link to="/carrousel_louvre" className="linkPlage">
                <div className="lien">
                  <div>Carrousel du Louvre</div>
                  <div>
                    <img
                      src={require("../../../img/autres/carrousel_louvre/carrousel_louvre.jpeg")}
                      alt="carrousel_louvre"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={catacombes}>
            <Popup minWidth={200}>
              <Link to="/catacombes" className="linkPlage">
                <div className="lien">
                  <div>Catacombes de Paris</div>
                  <div>
                    <img
                      src={require("../../../img/autres/catacombes/catacombes.jpeg")}
                      alt="catacombes"
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
