import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Ile_l_Aumone extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ile l'Aumone Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/ile_l_aumone"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"limayB"} />
          <h1 className="title">Ile l'Aumone</h1>
          <Next next={"limayC"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/ile_l_aumone/ile_l_aumone01.jpg")}
              alt="ile_l_aumone01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_l_aumone/ile_l_aumone02.jpg")}
                alt="ile_l_aumone02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_l_aumone/ile_l_aumone03.jpg")}
                alt="ile_l_aumone03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Ile_l_Aumone;
