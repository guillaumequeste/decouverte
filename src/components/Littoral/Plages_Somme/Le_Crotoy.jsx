import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Le_Crotoy extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Le Crotoy Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_crotoy"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"baie_de_somme"} />
          <h1 className="title">Le Crotoy</h1>
          <Next next={"quend"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/le_crotoy/le_crotoy01.jpg")}
              alt="le_crotoy01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_crotoy/le_crotoy02.jpg")}
                alt="le_crotoy02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_crotoy/le_crotoy03.jpg")}
                alt="le_crotoy03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_crotoy/le_crotoy04.jpg")}
                alt="le_crotoy04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_crotoy/le_crotoy05.jpg")}
                alt="le_crotoy05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Crotoy;
