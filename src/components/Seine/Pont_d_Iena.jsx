import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Pont_d_Iena extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_d_iena"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"pont_du_garigliano"} />
          <h1 className="title">Pont d'Iena</h1>
          <Next next={"pont_neuf"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/pont_d_iena/pont_d_iena01.jpg")}
              alt="pont_d_iena01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/pont_d_iena/pont_d_iena02.jpg")}
                alt="pont_d_iena02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/pont_d_iena/pont_d_iena03.jpg")}
                alt="pont_d_iena03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/pont_d_iena/pont_d_iena04.jpg")}
                alt="pont_d_iena04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/pont_d_iena/pont_d_iena05.jpg")}
                alt="pont_d_iena05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_d_Iena;
