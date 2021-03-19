import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Carte extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Musée français de la Carte à Jouer Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/arc_de_triomphe"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée français de la Carte à Jouer</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_carte/musee_carte.jpeg")}
              alt="musee_carte"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée français de la carte à jouer est le seul musée consacré à
              la carte à jouer en France. Il abrite en annexe, dans le pavillon
              d'entrée de l'ancien château des princes de Conti qui jouxte le
              bâtiment moderne consacré à la carte à jouer, la Galerie
              d'histoire de la ville d'Issy-les-Moulineaux.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.museecarteajouer.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée français de la carte à Jouer
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Carte;
