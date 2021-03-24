import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Veulettes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Veulettes-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/veulettes"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"les_petites_dalles"} />
          <h1 className="title">Veulettes-sur-Mer</h1>
          <Next next={"saint-valery-en-caux"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/veulettes/veulettes01.jpg")}
              alt="veulettes01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veulettes/veulettes02.jpg")}
                alt="veulettes02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veulettes/veulettes03.jpg")}
                alt="veulettes03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veulettes/veulettes04.jpg")}
                alt="veulettes04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Veulettes;
