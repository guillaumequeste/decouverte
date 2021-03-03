import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Notre_Dame_de_l_Isle extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/notre-dame-del_isle"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"port-mort"} />
          <h1 className="title">Notre-Dame-de-l'Isle</h1>
          <Next next={"vernon"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/notre-dame-de-l_isle/notre-dame-de-l_isle01.jpg")}
              alt="notre-dame-del_isle01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/notre-dame-de-l_isle/notre-dame-de-l_isle02.jpg")}
                alt="notre-dame-del_isle02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Notre_Dame_de_l_Isle;
