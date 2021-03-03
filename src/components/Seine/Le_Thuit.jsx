import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Le_Thuit extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_thuit"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"la_roquette"} />
          <h1 className="title">Panorama du Thuit</h1>
          <Next next={"les_andelys"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/le_thuit/le_thuit01.jpg")}
              alt="le_thuit01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_thuit/le_thuit02.jpg")}
                alt="le_thuit02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_thuit/le_thuit03.jpg")}
                alt="le_thuit03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_thuit/le_thuit04.jpg")}
                alt="le_thuit04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_thuit/le_thuit05.jpg")}
                alt="le_thuit05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Thuit;
