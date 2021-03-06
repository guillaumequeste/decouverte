import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Previous from "../../Previous";

class Avenue_Verte_Mesnieres extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Avenue verte Mesnières-en-Bray Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/avenue_verte_mesnieres"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <Previous prev={"avenue_verte_osmoy"} />
          <h1 className="title">Avenue verte Mesnières-en-Bray</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres01.jpg")}
              alt="avenue_verte_mesnieres01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres02.jpg")}
                alt="avenue_verte_mesnieres02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres03.jpg")}
                alt="avenue_verte_mesnieres03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres04.jpg")}
                alt="avenue_verte_mesnieres04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres05.jpg")}
                alt="avenue_verte_mesnieres05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres06.jpg")}
                alt="avenue_verte_mesnieres06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_mesnieres/avenue_verte_mesnieres07.jpg")}
                alt="avenue_verte_mesnieres07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Avenue_Verte_Mesnieres;
