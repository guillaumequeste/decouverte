import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Quend extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/quend"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"le_crotoy"} />
          <h1 className="title">Quend</h1>
          <Next next={"fort-mahon"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/quend/quend01.jpg")}
              alt="quend01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quend/quend02.jpg")}
                alt="quend02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quend/quend03.jpg")}
                alt="quend03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Quend;
