import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Vatteville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Vatteville-la-Rue Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/vatteville"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"la_vacquerie"} />
          <h1 className="title">Vatteville-la-Rue</h1>
          <Next next={"villequier"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/vatteville/vatteville01.jpg")}
              alt="vatteville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vatteville/vatteville02.jpg")}
                alt="vatteville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vatteville/vatteville03.jpg")}
                alt="vatteville03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Vatteville;
