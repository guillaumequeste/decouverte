import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Quiberville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Quiberville Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/quiberville"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"saint-aubin"} />
          <h1 className="title">Quiberville</h1>
          <Next next={"sainte-marguerite"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/quiberville/quiberville01.jpg")}
              alt="quiberville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville02.jpg")}
                alt="quiberville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville03.jpg")}
                alt="quiberville03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville04.jpg")}
                alt="quiberville04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville05.jpg")}
                alt="quiberville05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville06.jpg")}
                alt="quiberville06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville07.jpg")}
                alt="quiberville07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville08.jpg")}
                alt="quiberville08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville09.jpg")}
                alt="quiberville09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville10.jpg")}
                alt="quiberville10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville11.jpg")}
                alt="quiberville11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville12.jpg")}
                alt="quiberville12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville13.jpg")}
                alt="quiberville13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/quiberville/quiberville14.jpg")}
                alt="quiberville14"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiberville;
