import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Andresy extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Andresy Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/andresy"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"ile_derivation"} />
          <h1 className="title">Andresy</h1>
          <Next next={"conflans-sainte-honorine"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/andresy/andresy01.jpg")}
              alt="andresy01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy02.jpg")}
                alt="andresy02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy03.jpg")}
                alt="andresy03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy04.jpg")}
                alt="andresy04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy05.jpg")}
                alt="andresy05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy06.jpg")}
                alt="andresy06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy07.jpg")}
                alt="andresy07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy08.jpg")}
                alt="andresy08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/andresy/andresy09.jpg")}
                alt="andresy09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Andresy;
