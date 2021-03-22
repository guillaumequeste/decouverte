import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class La_Villette extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"La Villette Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/la_villette"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">La Villette</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/tour_montparnasse/tour_montparnasse.jpeg")}
              alt="la_villette"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Parc culturel parisien, La Villette conjugue arts, détente et
              sport en milieu urbain. Un véritable lieu de vie, avec une
              programmation riche : expo, cirque, danse...
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://lavillette.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                La Villette
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default La_Villette;
