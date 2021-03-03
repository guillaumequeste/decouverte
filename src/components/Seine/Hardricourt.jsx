import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Hardricourt extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/hardricourt"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"mezy-sur-seine"} />
          <h1 className="title">Hardricourt</h1>
          <Next next={"meulan-en-yvelines"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/hardricourt/hardricourt01.jpg")}
              alt="hardricourt01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/hardricourt/hardricourt02.jpg")}
                alt="hardricourt02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Hardricourt;
