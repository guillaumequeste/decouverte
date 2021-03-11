import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class LimayB extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/limayB"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"limayA"} />
          <h1 className="title">Limay</h1>
          <Next next={"ile_l_aumone"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/limayB/limayB01.jpg")}
              alt="limayB01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayB/limayB02.jpg")}
                alt="limayB02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayB/limayB03.jpg")}
                alt="limayB03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default LimayB;
