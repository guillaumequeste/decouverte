import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Tosny extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/tosny"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"port_morin"} />
          <h1 className="title">Tosny</h1>
          <Next next={"villers-sur-le-roule"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/tosny/tosny01.jpg")}
              alt="tosny01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/tosny/tosny02.jpg")}
                alt="tosny02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Tosny;
