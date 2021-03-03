import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Honfleur_plage extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Honfleur plage Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/honfleur_plage"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <h1 className="title">Honfleur plage</h1>
          <Next next={"honfleur_point_de_vue"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/honfleur_plage/honfleur_plage01.jpg")}
              alt="honfleur_plage01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_plage/honfleur_plage02.jpg")}
                alt="honfleur_plage02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_plage/honfleur_plage03.jpg")}
                alt="honfleur_plage03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_plage/honfleur_plage04.jpg")}
                alt="honfleur_plage04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_plage/honfleur_plage05.jpg")}
                alt="honfleur_plage05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_plage/honfleur_plage06.jpg")}
                alt="honfleur_plage06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_plage/honfleur_plage07.jpg")}
                alt="honfleur_plage07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/honfleur_plage/honfleur_plage08.jpg")}
                alt="honfleur_plage08"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Honfleur_plage;
