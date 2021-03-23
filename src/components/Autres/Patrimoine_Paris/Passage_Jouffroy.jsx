import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Passage_Jouffroy extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Passage Jouffroy Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/passage_jouffroy"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Passage Jouffroy</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/passage_jouffroy/passage_jouffroy01.jpg")}
              alt="passage_jouffroy01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le passage Jouffroy est un passage couvert parisien situé dans le
              9e arrondissement, entre le boulevard Montmartre au sud et la rue
              de la Grange-Batelière au nord.
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/passage_jouffroy/passage_jouffroy02.jpg")}
                alt="notre-passage_jouffroy02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/passage_jouffroy/passage_jouffroy03.jpg")}
                alt="notre-passage_jouffroy03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_Jouffroy;
