import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Champs_Elysees extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Champs Elysées Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/champs_elysees"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Avenue des Champs Elysées</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/champs_elysees/champs_elysees.jpeg")}
              alt="champs_elysees"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L’avenue des Champs-Élysées (souvent abrégé les Champs-Élysées,
              parfois les Champs) est une voie de Paris. Longue de près de deux
              kilomètres et suivant l'axe historique de la ville, elle est une
              voie de circulation centrale reliant la place de la Concorde à la
              place Charles-de-Gaulle dans le 8e arrondissement. Site
              touristique majeur, elle a souvent passé pour la plus belle avenue
              de la capitale, et est connue en France comme la « plus belle
              avenue du monde ».
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/transports/73130/Avenue-des-Champs-Elysees"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avenue des Champs Elysées
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Champs_Elysees;
