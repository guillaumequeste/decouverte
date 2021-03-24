import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Etaples extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Etaples-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/etaples"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"le_touquet"} />
          <h1 className="title">Etaples-sur-Mer</h1>
          <Next next={"sainte-cecile_plage"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/etaples/etaples01.jpg")}
              alt="etaples01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/etaples/etaples02.jpg")}
                alt="etaples02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Etaples;
