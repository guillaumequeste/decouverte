import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Nanterre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Nanterre Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/nanterre"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"ile_chaussee"} />
          <h1 className="title">Nanterre</h1>
          <Next next={"pont_saint-cloud"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/nanterre/nanterre01.jpg")}
              alt="nanterre01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/nanterre/nanterre02.jpg")}
                alt="nanterre02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/nanterre/nanterre03.jpg")}
                alt="nanterre03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/nanterre/nanterre04.jpg")}
                alt="nanterre04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/nanterre/nanterre05.jpg")}
                alt="nanterre05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/nanterre/nanterre06.jpg")}
                alt="nanterre06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/nanterre/nanterre07.jpg")}
                alt="nanterre07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Nanterre;
