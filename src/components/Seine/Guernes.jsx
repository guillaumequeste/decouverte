import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Guernes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/guernes"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"sandrancourt"} />
          <h1 className="title">Guernes</h1>
          <Next next={"limayA"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/guernes/guernes01.jpg")}
              alt="guernes01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/guernes/guernes02.jpg")}
                alt="guernes02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/guernes/guernes03.jpg")}
                alt="guernes03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Guernes;
