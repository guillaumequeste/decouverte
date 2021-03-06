import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Varenne extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"La Varenne Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/varenne"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">La Varenne</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/varenne/varenne01.jpg")}
              alt="varenne01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/varenne/varenne02.jpg")}
                alt="varenne02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/varenne/varenne03.jpg")}
                alt="varenne03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Varenne;
