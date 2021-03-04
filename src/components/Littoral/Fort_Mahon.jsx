import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Fort_Mahon extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/fort-mahon"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"quend"} />
          <h1 className="title">Fort-Mahon-Plage</h1>
          <Next next={"berck"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/fort-mahon/fort-mahon01.jpg")}
              alt="fort-mahon01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/fort-mahon/fort-mahon02.jpg")}
                alt="fort-mahon02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/fort-mahon/fort-mahon03.jpg")}
                alt="fort-mahon03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Fort_Mahon;
