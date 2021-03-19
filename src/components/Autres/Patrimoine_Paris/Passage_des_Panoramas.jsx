import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Passage_des_Panoramas extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Passage des Panoramas Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/passage_des_panoramas"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Passage des Panoramas</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le passage des Panoramas est un passage couvert parisien, situé
              dans le 2e arrondissement, entre le boulevard Montmartre au nord
              et la rue Saint-Marc au sud, qui abrite la boutique Stern.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/100264/Passage-des-Panoramas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Passage des Panoramas
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_des_Panoramas;
