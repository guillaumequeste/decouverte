import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_Saint_Michel extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pont Saint-Michel Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_saint-michel"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"ile_cite"} />
          <h1 className="title">Pont Saint-Michel</h1>
          <Next next={"pont_au_double"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_saint-michel/pont_saint-michel01.jpg")}
              alt="pont_saint-michel01"
              className="photo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_Saint_Michel;
