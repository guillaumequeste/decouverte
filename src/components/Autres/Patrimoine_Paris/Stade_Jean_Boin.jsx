import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Stade_Jean_Boin extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Stade Jean Boin Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/stade_jean_boin"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Stade Jean Boin</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/stade_jean_boin/stade_jean_boin.jpeg")}
              alt="stade_jean_boin"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le stade Jean-Bouin est un stade de 20 000 places, situé dans le
              16e arrondissement de Paris, juste à côté du Parc des Princes.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stade_Jean_Boin;
