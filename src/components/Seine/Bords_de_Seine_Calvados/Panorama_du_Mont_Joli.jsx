import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Panorama_du_Mont_Joli extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Panorama du Mont Joli Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/panorama_du_mont_joli"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"honfleur_point_de_vue"} />
          <h1 className="title">Panorama du Mont Joli</h1>
          <Next next={"honfleur"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/panorama_du_mont_joli/panorama_du_mont_joli01.jpg")}
              alt="panorama_du_mont_joli01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/panorama_du_mont_joli/panorama_du_mont_joli02.jpg")}
                alt="panorama_du_mont_joli02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/panorama_du_mont_joli/panorama_du_mont_joli03.jpg")}
                alt="panorama_du_mont_joli03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Panorama_du_Mont_Joli;
