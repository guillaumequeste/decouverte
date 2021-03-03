import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Duclair extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/duclair"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"saint-paul"} />
          <h1 className="title">Duclair</h1>
          <Next next={"saint-pierre-de-manneville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/duclair/duclair01.jpg")}
              alt="duclair01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/duclair/duclair02.jpg")}
                alt="duclair02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/duclair/duclair03.jpg")}
                alt="duclair03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/duclair/duclair04.jpg")}
                alt="duclair04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Duclair;
