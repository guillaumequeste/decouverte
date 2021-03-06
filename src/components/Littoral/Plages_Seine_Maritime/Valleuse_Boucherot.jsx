import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Valleuse_Boucherot extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Valleuse Boucherot Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/valleuse_boucherot"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"le_croquet"} />
          <h1 className="title">Valleuse Boucherot</h1>
          <Next next={"saint-jouin-bruneval_plage"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/valleuse_boucherot/valleuse_boucherot01.jpg")}
              alt="valleuse_boucherot01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/valleuse_boucherot/valleuse_boucherot02.jpg")}
                alt="valleuse_boucherot02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/valleuse_boucherot/valleuse_boucherot03.jpg")}
                alt="valleuse_boucherot03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Valleuse_Boucherot;
