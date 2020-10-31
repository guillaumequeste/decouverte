import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";

class Petite_France extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Petite France Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/petite_france"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="title">Petite France</h1>
          <div className="container">
            <p>
              La Petite France est un quartier pittoresque du centre historique
              de Strasbourg. Situé sur la Grande Île, il est classé au
              patrimoine mondial de l'UNESCO depuis 1988. Le quartier est
              délimité au nord par la rue du Bain-aux-Plantes, la place
              Benjamin-Zix et la rue des Dentelles ; à l'est par la rue du
              Pont-Saint-Martin, le pont Saint-Martin et la passerelle des
              Moulins ; au sud par le canal du moulin Zorn ; à l'ouest par les
              ponts couverts.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Petite_France;
