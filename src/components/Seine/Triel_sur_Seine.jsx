import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Triel_sur_Seine extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Triel-sur-Seine Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/triel-sur-seine"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"vaux-sur-seine"} />
          <h1 className="title">Triel-sur-Seine</h1>
          <Next next={"ile_derivation"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/triel-sur-seine/triel-sur-seine01.jpg")}
              alt="triel-sur-seine01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/triel-sur-seine/triel-sur-seine02.jpg")}
                alt="triel-sur-seine02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/triel-sur-seine/triel-sur-seine03.jpg")}
                alt="triel-sur-seine03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/triel-sur-seine/triel-sur-seine04.jpg")}
                alt="triel-sur-seine04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/triel-sur-seine/triel-sur-seine05.jpg")}
                alt="triel-sur-seine05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/triel-sur-seine/triel-sur-seine06.jpg")}
                alt="triel-sur-seine06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/triel-sur-seine/triel-sur-seine07.jpg")}
                alt="triel-sur-seine07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/triel-sur-seine/triel-sur-seine08.jpg")}
                alt="triel-sur-seine08"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Triel_sur_Seine;
