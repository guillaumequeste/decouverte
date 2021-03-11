import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_Marie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_marie"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_saint-louis"} />
          <h1 className="title">Pont Marie</h1>
          <Next next={"ile_saint-louis"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_marie/pont_marie01.jpg")}
              alt="pont_marie01"
              className="photo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_Marie;
