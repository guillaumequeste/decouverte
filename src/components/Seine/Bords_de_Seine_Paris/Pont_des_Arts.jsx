import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_des_Arts extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pont des Arts Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_des_arts"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_d_iena"} />
          <h1 className="title">Pont des Arts</h1>
          <Next next={"pont_neuf"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_des_arts/pont_des_arts01.jpg")}
              alt="pont_des_arts01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_des_arts/pont_des_arts02.jpg")}
                alt="pont_des_arts02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_des_arts/pont_des_arts03.jpg")}
                alt="pont_des_arts03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_des_arts/pont_des_arts04.jpg")}
                alt="pont_des_arts04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_des_Arts;
