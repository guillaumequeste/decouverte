import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Saint_Coulomb extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Le Minihic Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_minihic"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"pointe_de_la_varde"} />
          <h1 className="title">Saint-Coulomb</h1>
          <Next next={"anse_du_guesclin"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/saint-coulomb/saint-coulomb01.jpg")}
              alt="saint-coulomb01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-coulomb/saint-coulomb02.jpg")}
                alt="saint-coulomb02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-coulomb/saint-coulomb03.jpg")}
                alt="saint-coulomb03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Coulomb;
