import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Grande_Arche extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Grande Arche de la Défense Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/grande_arche"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Grande Arche de la Défense</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/grande_arche/grande_arche.jpeg")}
              alt="grande_arche"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L’Arche de la Défense ou Grande Arche est un immeuble de bureaux
              situé dans le quartier d'affaires de La Défense à l'ouest de
              Paris, sur le territoire de la commune de Puteaux. Inaugurée en
              1989 au moment du bicentenaire de la Révolution sous le nom de
              Grande Arche de la Fraternité1, et construite sur l'axe historique
              parisien, c'est l'un des grands travaux de François Mitterrand
              réalisés au cours de son premier mandat de président de la
              République française. Le bâtiment a été conçu par l'architecte
              danois Johan Otto von Spreckelsen.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="http://www.lagrandearche.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grande Arche de la Défense
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Grande_Arche;
