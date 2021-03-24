import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Ile_Saint_Louis extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ile Saint-Louis Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/ile_saint_louis"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_marie"} />
          <h1 className="title">Ile Saint-Louis</h1>
          <Next next={"pont_de_sully"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/ile_saint-louis/ile_saint-louis01.jpg")}
              alt="ile_saint-louis01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_saint-louis/ile_saint-louis02.jpg")}
                alt="ile_saint-louis02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_saint-louis/ile_saint-louis03.jpg")}
                alt="ile_saint-louis03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_saint-louis/ile_saint-louis04.jpg")}
                alt="ile_saint-louis04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_saint-louis/ile_saint-louis05.jpg")}
                alt="ile_saint-louis05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/ile_saint-louis/ile_saint-louis06.jpg")}
                alt="ile_saint-louis06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Ile_Saint_Louis;
