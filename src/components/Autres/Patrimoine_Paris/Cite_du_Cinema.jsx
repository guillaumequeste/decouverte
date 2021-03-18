import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Cite_du_Cinema extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cité du Cinéma Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cite_du_cinema"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Cité du Cinéma</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/cite_du_cinema/cite_du_cinema.jpeg")}
              alt="cite_du_cinema"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La Cité du cinéma est un pôle cinématographique porté par le
              réalisateur et producteur français Luc Besson, implanté à
              Saint-Denis, au nord de Paris (au 20 rue Ampère). Elle est
              l'équivalent français de Cinecittà à Rome (Italie), de Pinewood à
              Londres (Grande-Bretagne) ou de Babelsberg à Berlin (Allemagne).
              Elle est inaugurée le 21 septembre 2012.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="http://www.citeducinema.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cité du Cinéma
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cite_du_Cinema;
