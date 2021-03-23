import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Passage_Choiseul extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Passage Choiseul Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/passage_choiseul"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Passage Choiseul</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/passage_choiseul/passage_choiseul01.jpg")}
              alt="passage_choiseul01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le passage de Choiseul, plus simplement nommé le passage Choiseul,
              est un passage couvert parisien situé dans le 2e arrondissement.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_Choiseul;
