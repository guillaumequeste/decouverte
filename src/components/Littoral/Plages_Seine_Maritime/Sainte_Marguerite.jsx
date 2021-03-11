import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Sainte_Marguerite extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/sainte-marguerite"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"quiberville"} />
          <h1 className="title">Sainte-Marguerite-sur-Mer</h1>
          <Next next={"varengeville"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite01.jpg")}
              alt="sainte-marguerite01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite02.jpg")}
                alt="sainte-marguerite02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite03.jpg")}
                alt="sainte-marguerite03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite04.jpg")}
                alt="sainte-marguerite04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite05.jpg")}
                alt="sainte-marguerite05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite06.jpg")}
                alt="sainte-marguerite06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite07.jpg")}
                alt="sainte-marguerite07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Sainte_Marguerite;
