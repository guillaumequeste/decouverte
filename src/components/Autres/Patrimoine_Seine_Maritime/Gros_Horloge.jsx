import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Gros_Horloge extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Le Gros-Horloge à Rouen Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/gros-horloge"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Le Gros-Horloge à Rouen</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/gros-horloge/gros-horloge.jpg")}
              alt="gros-horloge"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Gros-Horloge est l'un des monuments emblématiques de la ville
              de Rouen 1. La construction, accolée à un beffroi, est constituée
              d'une arche Renaissance enjambant la rue du Gros-Horloge surmontée
              d'une horloge astronomique du xive siècle. Le Gros-Horloge fait
              l’objet d’un classement au titre des monuments historiques par la
              liste de 1862.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="https://rouen.fr/gros-horloge" target="_blank" rel="noopener noreferrer">
                Le Gros-Horloge
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gros_Horloge;
