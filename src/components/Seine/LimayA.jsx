import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class LimayA extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/limayA"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"guernes"} />
          <h1 className="title">Limay</h1>
          <Next next={"limayB"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/limayA/limayA01.jpg")}
              alt="limayA01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/limayA/limayA02.jpg")}
                alt="limayA02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/limayA/limayA03.jpg")}
                alt="limayA03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default LimayA;
