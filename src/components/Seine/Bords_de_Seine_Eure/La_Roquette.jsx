import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class La_Roquette extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/la_roquette"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"le_plessis"} />
          <h1 className="title">La Roquette</h1>
          <Next next={"le_thuit"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/la_roquette/la_roquette01.jpg")}
              alt="la_roquette01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/la_roquette/la_roquette02.jpg")}
                alt="la_roquette02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/la_roquette/la_roquette03.jpg")}
                alt="la_roquette03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default La_Roquette;
