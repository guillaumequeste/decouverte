import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Champ_de_Mars extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Champ de Mars Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/champ_de_mars"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Champ de Mars</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/champ_de_mars/champ_de_mars.jpeg")}
              alt="champ_de_mars"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Champ-de-Mars est un vaste jardin public, entièrement ouvert et
              situé à Paris dans le 7e arrondissement, entre la tour Eiffel au
              nord-ouest et l'École militaire au sud-est. Avec ses 24,5 ha, le
              jardin du Champ-de-Mars est l'un des plus grands espaces verts de
              Paris. Riche d'une histoire bicentenaire, le Champ-de-Mars
              accueille les Parisiens et les touristes toute l'année autour d'un
              vaste ensemble d'activités.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/71152/Parc-du-Champ-de-Mars"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parc du Champ de Mars
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Champ_de_Mars;
