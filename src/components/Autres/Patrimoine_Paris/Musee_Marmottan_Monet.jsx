import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Marmottan_Monet extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Musée Marmottan Monet Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/musee_marmottan_monet"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée Marmottan Monet</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_marmottan_monet/musee_marmottan_monet.jpeg")}
              alt="musee_marmottan_monet"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée Marmottan, devenu musée Marmottan Monet dans les années
              1990, est un musée des beaux-arts situé à Paris. Il présente
              notamment une collection d’objets d’art et de tableaux du Premier
              Empire, ainsi que des œuvres de peintres impressionnistes dont la
              plus grande collection au monde d'œuvres de Claude Monet.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.marmottan.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée Marmottan Monet
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Marmottan_Monet;
