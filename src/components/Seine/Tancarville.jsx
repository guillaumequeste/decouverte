import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Tancarville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/tancarville"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"phare_de_la_roque"} />
          <h1 className="title">Tancarville</h1>
          <Next next={"port-jerome"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/tancarville/tancarville01.jpg")}
              alt="tancarville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/tancarville/tancarville02.jpg")}
                alt="tancarville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/tancarville/tancarville03.jpg")}
                alt="tancarville03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/tancarville/tancarville04.jpg")}
                alt="tancarville04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Tancarville;
