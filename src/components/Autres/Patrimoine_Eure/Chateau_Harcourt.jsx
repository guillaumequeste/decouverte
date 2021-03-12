import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Chateau_Harcourt extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/chateau_harcourt"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Château d'Harcourt</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/chateau_harcourt/chateau_harcourt.jpg")}
              alt="chateau_harcourt"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le château d'Harcourt est un château du xiie siècle situé à
              Harcourt, dans le département de l'Eure en Normandie. Modèle
              d’architecture médiévale, cet édifice a conservé intact une grande
              partie de sa structure initiale. Il est lié à la famille
              d'Harcourt, une famille de la noblesse française qui tirerait ses
              origines de Bernard le Danois. Il possède l'un des plus anciens
              arboretums de France, créé par Louis Gervais Delamarre, en 1802.
              Le château fait l’objet d’un classement au titre des monuments
              historiques par la liste de 1862.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="http://www.harcourt-normandie.fr/" target="_blank">
                Château d'Harcourt
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chateau_Harcourt;
