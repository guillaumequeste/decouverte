import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Porcheville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Porcheville Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/porcheville"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"limayD"} />
          <h1 className="title">Porcheville</h1>
          <Next next={"gargenville"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/porcheville/porcheville01.jpg")}
              alt="porcheville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/porcheville/porcheville02.jpg")}
                alt="porcheville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/porcheville/porcheville03.jpg")}
                alt="porcheville03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Porcheville;
