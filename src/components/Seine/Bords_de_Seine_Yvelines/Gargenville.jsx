import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Gargenville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Gargenville Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/gargenville"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"porcheville"} />
          <h1 className="title">Gargenville</h1>
          <Next next={"juziers"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/gargenville/gargenville01.jpg")}
              alt="gargenville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/gargenville/gargenville02.jpg")}
                alt="gargenville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/gargenville/gargenville03.jpg")}
                alt="gargenville03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Gargenville;
