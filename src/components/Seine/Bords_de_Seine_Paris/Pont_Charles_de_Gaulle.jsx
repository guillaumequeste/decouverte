import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_Charles_de_Gaulle extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pont Charles de Gaulle Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_charles_de_gaulle"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_de_sully"} />
          <h1 className="title">Pont Charles de Gaulle</h1>
          <Next next={"pont_national"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_charles_de_gaulle/pont_charles_de_gaulle01.jpg")}
              alt="pont_charles_de_gaulle01"
              className="photo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_Charles_de_Gaulle;
