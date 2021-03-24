import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Criel extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Criel-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/criel"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"berneval"} />
          <h1 className="title">Criel-sur-Mer</h1>
          <Next next={"mesnil_val"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/criel/criel01.jpg")}
              alt="criel01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel02.jpg")}
                alt="criel02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel03.jpg")}
                alt="criel03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel04.jpg")}
                alt="criel04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel05.jpg")}
                alt="criel05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel06.jpg")}
                alt="criel06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel07.jpg")}
                alt="criel07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel08.jpg")}
                alt="criel08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/criel/criel09.jpg")}
                alt="criel09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Criel;
