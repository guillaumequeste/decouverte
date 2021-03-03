import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Sahurs extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/sahurs"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"saint-pierre-de-manneville"} />
          <h1 className="title">Sahurs</h1>
          <Next next={"saint-maur"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/sahurs/sahurs01.jpg")}
              alt="sahurs01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/sahurs/sahurs02.jpg")}
                alt="sahurs02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/sahurs/sahurs03.jpg")}
                alt="sahurs03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Sahurs;
