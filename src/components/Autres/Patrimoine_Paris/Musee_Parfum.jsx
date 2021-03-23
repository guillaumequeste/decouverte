import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Musee_Parfum extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Grand Musée du Parfum Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/musee_parfum"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Grand Musée du Parfum</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_parfum/musee_parfum01.jpg")}
              alt="musee_parfum01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>Musée fermé.</p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/musee_parfum/musee_parfum02.jpg")}
                alt="musee_parfum02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/musee_parfum/musee_parfum03.jpg")}
                alt="musee_parfum03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Parfum;
