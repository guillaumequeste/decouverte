import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Cancale1 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cancale (1) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cancale1"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"cancale2"} />
          <h1 className="title">Cancale (1)</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/cancale1/cancale101.jpg")}
              alt="cancale101"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cancale1/cancale102.jpg")}
                alt="cancale102"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cancale1/cancale103.jpg")}
                alt="cancale103"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancale1;
