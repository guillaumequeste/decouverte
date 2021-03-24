import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Le_Bois_de_Cise extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Le Bois de Cise Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_bois_de_cise"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"mers"} />
          <h1 className="title">Le Bois de Cise</h1>
          <Next next={"ault"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/le_bois_de_cise/le_bois_de_cise01.jpg")}
              alt="le_bois_de_cise01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_bois_de_cise/le_bois_de_cise02.jpg")}
                alt="le_bois_de_cise02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_bois_de_cise/le_bois_de_cise03.jpg")}
                alt="le_bois_de_cise03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Bois_de_Cise;
