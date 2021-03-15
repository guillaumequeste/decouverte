import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_du_Garigliano extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_du_garigliano"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_saint-cloud"} />
          <h1 className="title">Pont du Garigliano</h1>
          <Next next={"pont_d_iena"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_du_garigliano/pont_du_garigliano01.jpg")}
              alt="pont_du_garigliano01"
              className="photo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_du_Garigliano;
