import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Le_Touquet extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_touquet"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"stella"} />
          <h1 className="title">Le Touquet-Paris-Plage</h1>
          <Next next={"etaples"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/le_touquet/le_touquet01.jpg")}
              alt="le_touquet01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet02.jpg")}
                alt="le_touquet02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet03.jpg")}
                alt="le_touquet03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet04.jpg")}
                alt="le_touquet04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet05.jpg")}
                alt="le_touquet05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet06.jpg")}
                alt="le_touquet06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet07.jpg")}
                alt="le_touquet07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet08.jpg")}
                alt="le_touquet08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet09.jpg")}
                alt="le_touquet09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet10.jpg")}
                alt="le_touquet10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet11.jpg")}
                alt="le_touquet11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet12.jpg")}
                alt="le_touquet12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet13.jpg")}
                alt="le_touquet13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet14.jpg")}
                alt="le_touquet14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet15.jpg")}
                alt="le_touquet15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet16.jpg")}
                alt="le_touquet16"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet17.jpg")}
                alt="le_touquet17"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet18.jpg")}
                alt="le_touquet18"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet19.jpg")}
                alt="le_touquet19"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet20.jpg")}
                alt="le_touquet20"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet21.jpg")}
                alt="le_touquet21"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/le_touquet/le_touquet22.jpg")}
                alt="le_touquet22"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Touquet;
