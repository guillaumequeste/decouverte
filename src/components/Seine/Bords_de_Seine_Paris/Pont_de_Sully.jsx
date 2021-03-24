import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_de_Sully extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pont de Sully Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_de_Sully"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"ile_saint-louis"} />
          <h1 className="title">Pont de Sully</h1>
          <Next next={"pont_charles_de_gaulle"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_de_sully/pont_de_sully01.jpg")}
              alt="pont_de_sully01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_de_sully/pont_de_sully02.jpg")}
                alt="pont_de_sully02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_de_Sully;
