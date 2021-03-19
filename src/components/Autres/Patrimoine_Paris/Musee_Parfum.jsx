import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

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
              src={require("../../../img/autres/musee_orsay/musee_orsay.jpeg")}
              alt="musee_orsay"
              className="photo"
            />
          </div>
          <div className="container">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Parfum;
