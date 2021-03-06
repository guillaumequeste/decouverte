import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class LimayD extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Limay (D) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/limayD"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"limayC"} />
          <h1 className="title">Limay (D)</h1>
          <Next next={"porcheville"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/limayD/limayD01.jpg")}
              alt="limayD01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayD/limayD02.jpg")}
                alt="limayD02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayD/limayD03.jpg")}
                alt="limayD03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/limayD/limayD04.jpg")}
                alt="limayD04"
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

export default LimayD;
