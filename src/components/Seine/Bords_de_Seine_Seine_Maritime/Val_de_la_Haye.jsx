import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Val_de_la_Haye extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Val-de-la-Haye Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/val-de-la-haye"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"hautot"} />
          <h1 className="title">Val-de-la-Haye</h1>
          <Next next={"rouen"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/val-de-la-haye/val-de-la-haye01.jpg")}
              alt="val-de-la-haye01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/val-de-la-haye/val-de-la-haye02.jpg")}
                alt="val-de-la-haye02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Val_de_la_Haye;
