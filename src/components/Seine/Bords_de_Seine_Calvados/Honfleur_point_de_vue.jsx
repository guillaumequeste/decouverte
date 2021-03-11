import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Honfleur_point_de_vue extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Honfleur point de vue Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/honfleur_point_de_vue"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"honfleur_plage"} />
          <h1 className="title">Honfleur : point de vue</h1>
          <Next next={"panorama_du_mont_joli"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/honfleur_point_de_vue/honfleur_point_de_vue01.jpg")}
              alt="honfleur_point_de_vue01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/honfleur_point_de_vue/honfleur_point_de_vue02.jpg")}
                alt="honfleur_point_de_vue02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/honfleur_point_de_vue/honfleur_point_de_vue03.jpg")}
                alt="honfleur_point_de_vue03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/honfleur_point_de_vue/honfleur_point_de_vue04.jpg")}
                alt="honfleur_point_de_vue04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Honfleur_point_de_vue;
