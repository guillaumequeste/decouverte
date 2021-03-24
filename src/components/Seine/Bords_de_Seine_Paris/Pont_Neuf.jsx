import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pont_Neuf extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pont Neuf Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_neuf"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_des_arts"} />
          <h1 className="title">Pont Neuf</h1>
          <Next next={"pont_au_change"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/pont_neuf/pont_neuf01.jpg")}
              alt="pont_neuf01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_neuf/pont_neuf02.jpg")}
                alt="pont_neuf02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_neuf/pont_neuf03.jpg")}
                alt="pont_neuf03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_neuf/pont_neuf04.jpg")}
                alt="pont_neuf04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_neuf/pont_neuf05.jpg")}
                alt="pont_neuf05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/pont_neuf/pont_neuf06.jpg")}
                alt="pont_neuf06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_Neuf;
