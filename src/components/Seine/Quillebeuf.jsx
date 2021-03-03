import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Quillebeuf extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/quillebeuf"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"port-jerome"} />
          <h1 className="title">Quillebeuf-sur-Seine</h1>
          <Next next={"vieux-port"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/quillebeuf/quillebeuf01.jpg")}
              alt="quillebeuf01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/quillebeuf/quillebeuf02.jpg")}
                alt="quillebeuf02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/quillebeuf/quillebeuf03.jpg")}
                alt="quillebeuf03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Quillebeuf;
