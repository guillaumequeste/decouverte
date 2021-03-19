import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Jacquemart extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Musée Jacquemart-André Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/musee_jacquemart"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée Jacquemart-André</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_jacquemart/musee_jacquemart.jpeg")}
              alt="musee_jacquemart"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée Jacquemart-André est un musée de beaux-arts et d'arts
              décoratifs situé au 158, boulevard Haussmann, à Paris 8e.
              Propriété de l'institut de France, il est géré par la société
              Culturespaces depuis 1996.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.musee-jacquemart-andre.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée Jacquemart-André
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Jacquemart;
