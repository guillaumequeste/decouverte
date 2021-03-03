import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Passage_du_Trait extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/passage_du_trait"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"la_mailleray-sur-seine"} />
          <h1 className="title">Passage du Trait</h1>
          <Next next={"passage_d_yssainville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/passage_du_trait/passage_du_trait01.jpg")}
              alt="passage_du_trait01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/passage_du_trait/passage_du_trait02.jpg")}
                alt="passage_du_trait02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/passage_du_trait/passage_du_trait03.jpg")}
                alt="passage_du_trait03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/passage_du_trait/passage_du_trait04.jpg")}
                alt="passage_du_trait04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/passage_du_trait/passage_du_trait05.jpg")}
                alt="passage_du_trait05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/passage_du_trait/passage_du_trait06.jpg")}
                alt="passage_du_trait06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_du_Trait;
