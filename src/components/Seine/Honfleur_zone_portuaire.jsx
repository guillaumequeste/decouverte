import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Honfleur_zone_prtuaire extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Honfleur zone portuaire Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/honfleur_zone_portuaire"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"honfleur"} />
          <h1 className="title">Honfleur zone portuaire</h1>
          <Next next={"berville-sur-mer"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/honfleur_zone_portuaire/honfleur_zone_portuaire01.jpg")}
              alt="honfleur_zone_portuaire01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_zone_portuaire/honfleur_zone_portuaire02.jpg")}
                alt="honfleur_zone_portuaire02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_zone_portuaire/honfleur_zone_portuaire03.jpg")}
                alt="honfleur_zone_portuaire03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Honfleur_zone_prtuaire;
