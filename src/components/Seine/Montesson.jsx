import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Montesson extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Montesson Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/montesson"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"sartrouville"} />
          <h1 className="title">Montesson</h1>
          <Next next={"ile_chaussee"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/montesson/montesson01.jpg")}
              alt="montesson01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/montesson/montesson02.jpg")}
                alt="montesson02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/montesson/montesson03.jpg")}
                alt="montesson03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Montesson;
