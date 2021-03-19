import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Passage_du_Grand_Cerf extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Passage du Grand-Cerf Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/passage_du_grand-cerf"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Passage du Grand-Cerf</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le passage du Grand-Cerf est un passage couvert situé entre le 10,
              rue Dussoubs et le 145, rue Saint-Denis, dans le 2e arrondissement
              de Paris, dans le quartier Bonne-Nouvelle.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/100255/Passage-du-Grand-Cerf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Passage du Grand-Cerf
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_du_Grand_Cerf;
