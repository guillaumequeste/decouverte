import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Stella extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Stella-Plage Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/stella"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"merlimont"} />
          <h1 className="title">Stella-Plage</h1>
          <Next next={"le_touquet"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/stella/stella01.jpg")}
              alt="stella01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/stella/stella02.jpg")}
                alt="stella02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/stella/stella03.jpg")}
                alt="stella03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/stella/stella04.jpg")}
                alt="stella04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Stella;
