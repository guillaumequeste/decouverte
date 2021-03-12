import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Rotheneuf1 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Rotheneuf (1) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/rotheneuf1"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"rotheneuf2"} />
          <h1 className="title">Rotheneuf (1)</h1>
          <Next next={"pointe_de_la_varde"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/rotheneuf1/rotheneuf101.jpg")}
              alt="rotheneuf101"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf102.jpg")}
                alt="rotheneuf102"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf103.jpg")}
                alt="rotheneuf103"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf104.jpg")}
                alt="rotheneuf104"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf105.jpg")}
                alt="rotheneuf105"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf106.jpg")}
                alt="rotheneuf106"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf107.jpg")}
                alt="rotheneuf107"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf108.jpg")}
                alt="rotheneuf108"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/rotheneuf1/rotheneuf109.jpg")}
                alt="rotheneuf109"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Rotheneuf1;
