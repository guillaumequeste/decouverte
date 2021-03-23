import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Passage_Beaujolais extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Passage Beaujolais Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/passage_beaujolais"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Passage Beaujolais</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/passage_beaujolais/passage_beaujolais01.jpg")}
              alt="passage_beaujolais01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
            Le passage de Beaujolais est une voie du 1er arrondissement de Paris, en France.
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/passage_beaujolais/passage_beaujolais02.jpg")}
                alt="passage_beaujolais02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_Beaujolais;
