import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Petit_Palais extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Petit Palais Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/petit_palais"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Petit Palais</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/petit_palais/petit_palais.jpeg")}
              alt="petit_palais"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Petit Palais, construit à l'occasion de l'Exposition
              universelle de 1900 par l'architecte Charles Girault1, abrite le
              musée des Beaux-Arts de la ville de Paris. Il est situé à Paris
              8e, avenue Winston-Churchill, face au Grand Palais. Il s'agit de
              l’un des quatorze musées de la ville de Paris, gérés depuis le 1er
              janvier 2013 par l'établissement public administratif « Paris
              Musées ».
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.petitpalais.paris.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Petit Palais
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Petit_Palais;
