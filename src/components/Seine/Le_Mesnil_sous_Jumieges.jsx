import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Le_Mesnil_sous_Jumieges extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_mesnil-sous-jumieges"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"jumieges"} />
          <h1 className="title">Le Mesnil-sous-Jumièges</h1>
          <Next next={"saint-paul"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/le_mesnil-sous-jumieges/le_mesnil-sous-jumieges01.jpg")}
              alt="le_mesnil-sous-jumieges01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_mesnil-sous-jumieges/le_mesnil-sous-jumieges02.jpg")}
                alt="le_mesnil-sous-jumieges02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_mesnil-sous-jumieges/le_mesnil-sous-jumieges03.jpg")}
                alt="le_mesnil-sous-jumieges03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Mesnil_sous_Jumieges;
