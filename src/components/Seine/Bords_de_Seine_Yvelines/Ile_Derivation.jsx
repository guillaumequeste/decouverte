import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Ile_Derivation extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ile de la Dérivation Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/ile_derivation"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"triel-sur-seine"} />
          <h1 className="title">Ile de la Dérivation</h1>
          <Next next={"andresy"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/ile_derivation/ile_derivation01.jpg")}
              alt="tile_derivation01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_derivation/ile_derivation02.jpg")}
                alt="ile_derivation02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_derivation/ile_derivation03.jpg")}
                alt="ile_derivation03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_derivation/ile_derivation04.jpg")}
                alt="ile_derivation04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_derivation/ile_derivation05.jpg")}
                alt="ile_derivation05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_derivation/ile_derivation06.jpg")}
                alt="ile_derivation06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Ile_Derivation;
