import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Carrousel_Louvre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Carrousel du Louvre Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/carrousel_louvre"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Carrousel du Louvre</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/carrousel_louvre/carrousel_louvre.jpeg")}
              alt="carrousel_louvre"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Carrousel du Louvre est un centre commercial situé à Paris,
              entre le musée du Louvre et le jardin des Tuileries, en dessous de
              la pyramide inversée du Louvre. Construit dans le cadre des
              travaux du Grand Louvre par les architectes Ieoh Ming Pei et
              Michel Macary, il a été ouvert au public en 19931.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.carrouseldulouvre.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carrousel du Louvre
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrousel_Louvre;
