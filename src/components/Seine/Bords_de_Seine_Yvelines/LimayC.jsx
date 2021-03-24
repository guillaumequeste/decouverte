import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class LimayC extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Limay (C) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/limayC"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"ile_l_aumone"} />
          <h1 className="title">Limay (C)</h1>
          <Next next={"limayD"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/limayC/limayC01.jpg")}
              alt="limayC01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayC/limayC02.jpg")}
                alt="limayC02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayC/limayC03.jpg")}
                alt="limayC03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayC/limayC04.jpg")}
                alt="limayC04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayC/limayC05.jpg")}
                alt="limayC05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default LimayC;
