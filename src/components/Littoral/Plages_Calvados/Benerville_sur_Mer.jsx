import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Benerville_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Benerville-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/benerville-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"villers-sur-mer1"} />
          <h1 className="title">Benerville-sur-Mer</h1>
          <Next next={"deauville"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/benerville-sur-mer/benerville-sur-mer01.jpg")}
              alt="benerville-sur-mer01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/benerville-sur-mer/benerville-sur-mer02.jpg")}
                alt="benerville-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/benerville-sur-mer/benerville-sur-mer03.jpg")}
                alt="benerville-sur-mer03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Benerville_sur_Mer;
