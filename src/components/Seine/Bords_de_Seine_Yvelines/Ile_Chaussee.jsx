import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Ile_Chaussee extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ile de la Chaussée Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/ile_chaussee"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"montesson"} />
          <h1 className="title">Ile de la Chaussée</h1>
          <Next next={"nanterre"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/ile_chaussee/ile_chaussee01.jpg")}
              alt="ile_chaussee01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_chaussee/ile_chaussee02.jpg")}
                alt="ile_chaussee02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_chaussee/ile_chaussee03.jpg")}
                alt="ile_chaussee03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_chaussee/ile_chaussee04.jpg")}
                alt="ile_chaussee04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_chaussee/ile_chaussee05.jpg")}
                alt="ile_chaussee05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Ile_Chaussee;
