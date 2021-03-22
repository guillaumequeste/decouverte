import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Arenes_Lutece extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Arènes de Lutèce Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/arenes_lutece"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Arènes de Lutèce</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arenes_lutece/arenes_lutece01.jpg")}
              alt="arenes_lutece01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Les arènes de Lutèce, construites au ier siècle, sont un
              amphithéâtre gallo-romain situé à Paris. Il s'agit d'un complexe
              hybride, de type « amphithéâtre à scène » ou encore «
              amphithéâtre-théâtre », comportant à la fois une scène pour les
              représentations théâtrales et une arène pour les combats de
              gladiateurs et autres jeux de l'amphithéâtre.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Arenes_Lutece;
