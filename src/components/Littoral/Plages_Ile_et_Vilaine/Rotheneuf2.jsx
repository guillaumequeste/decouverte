import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Rotheneuf2 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Rotheneuf (2) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/rotheneuf2"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"saint-malo1"} />
          <h1 className="title">Rotheneuf (2)</h1>
          <Next next={"rotheneuf1"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/rotheneuf2/rotheneuf201.jpg")}
              alt="rotheneuf201"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf2/rotheneuf202.jpg")}
                alt="rotheneuf202"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Rotheneuf2;
