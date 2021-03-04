import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Le_Havre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Le Havre Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_havre"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"cricqueboeuf"} />
          <h1 className="title">Le Havre</h1>
          <Next next={"pain_de_sucre"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/le_havre/le_havre01.jpg")}
              alt="le_havre01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre02.jpg")}
                alt="le_havre02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre03.jpg")}
                alt="le_havre03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre04.jpg")}
                alt="le_havre04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre05.jpg")}
                alt="le_havre05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre06.jpg")}
                alt="le_havre06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre07.jpg")}
                alt="le_havre07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre08.jpg")}
                alt="le_havre08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre09.jpg")}
                alt="le_havre09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre10.jpg")}
                alt="le_havre10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre11.jpg")}
                alt="le_havre11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre12.jpg")}
                alt="le_havre12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre13.jpg")}
                alt="le_havre13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre14.jpg")}
                alt="le_havre14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_havre/le_havre15.jpg")}
                alt="le_havre15"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Havre;
