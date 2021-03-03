import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Passage_d_Yssainville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/passage_d_yssainville"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"passage_du_trait"} />
          <h1 className="title">Passage d'Yssainville</h1>
          <Next next={"heurteauville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/passage_d_yssainville/passage_d_yssainville01.jpg")}
              alt="passage_d_yssainville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/passage_d_yssainville/passage_d_yssainville02.jpg")}
                alt="passage_d_yssainville02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_d_Yssainville;
