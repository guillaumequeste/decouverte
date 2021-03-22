import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_au_Double extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pont au Double Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_au_double"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_saint-michel"} />
          <h1 className="title">Pont au Double</h1>
          <Next next={"notre_dame"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_au_double/pont_au_double01.jpg")}
              alt="pont_au_double01"
              className="photo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_au_Double;
