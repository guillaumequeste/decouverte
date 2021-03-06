import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Cleon extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cléon Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cleon"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"rouen"} />
          <h1 className="title">Cléon</h1>
          <Next next={"saint-aubin-les-elbeuf"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/cleon/cleon01.jpg")}
              alt="cleon01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/cleon/cleon02.jpg")}
                alt="cleon02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/cleon/cleon03.jpg")}
                alt="cleon03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/cleon/cleon04.jpg")}
                alt="cleon04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/cleon/cleon05.jpg")}
                alt="cleon05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/cleon/cleon06.jpg")}
                alt="cleon06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/cleon/cleon07.jpg")}
                alt="cleon07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/cleon/cleon08.jpg")}
                alt="cleon08"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cleon;
