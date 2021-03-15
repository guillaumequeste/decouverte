import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Haras_du_Pin extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Haras du Pin Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/haras_du_pin"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Haras national du Pin</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/haras_du_pin/haras_du_pin.jpg")}
              alt="haras_du_pin"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le haras national du Pin est situé sur le territoire de la commune
              du Pin-au-Haras, dans le département de l’Orne (61) en région
              Normandie. C’est le plus ancien des haras nationaux français.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.haras-national-du-pin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Haras national du Pin
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Haras_du_Pin;
