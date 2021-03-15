import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_Saint_Louis extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_saint-louis"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"notre_dame"} />
          <h1 className="title">Pont Saint-Louis</h1>
          <Next next={"pont_marie"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_saint-louis/pont_saint-louis01.jpg")}
              alt="pont_saint-louis01"
              className="photo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_Saint_Louis;
