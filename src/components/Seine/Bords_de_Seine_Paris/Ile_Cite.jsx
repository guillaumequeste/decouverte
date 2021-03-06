import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Ile_Cite extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ile de la Cité Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/ile_cite"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_au_change"} />
          <h1 className="title">Ile de la Cité</h1>
          <Next next={"pont_saint-michel"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/ile_cite/ile_cite01.jpg")}
              alt="ile_cite01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_cite/ile_cite02.jpg")}
                alt="ile_cite02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_cite/ile_cite03.jpg")}
                alt="ile_cite03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_cite/ile_cite04.jpg")}
                alt="ile_cite04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Ile_Cite;
