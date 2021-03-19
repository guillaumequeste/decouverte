import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Palais_de_la_Decouverte extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Palais de la Découverte Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/palais_de_la_decouverte"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Palais de la Découverte</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/palais_de_la_decouverte/palais_de_la_decouverte.jpeg")}
              alt="palais_de_la_decouverte"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Palais de la découverte est un musée et centre culturel
              scientifique parisien. Il est installé sur 25 000 m2 dans l'aile
              ouest du Grand Palais, dans le 8e arrondissement.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.palais-decouverte.fr/fr/accueil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Palais de la Découverte
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Palais_de_la_Decouverte;
