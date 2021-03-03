import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Vetheuil extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/vetheuil"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"la_roche-guyon"} />
          <h1 className="title">Vétheuil</h1>
          <Next next={"sandrancourt"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/vetheuil/vetheuil01.jpg")}
              alt="vetheuil01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil02.jpg")}
                alt="vetheuil02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil03.jpg")}
                alt="vetheuil03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil04.jpg")}
                alt="vetheuil04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil05.jpg")}
                alt="vetheuil05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil06.jpg")}
                alt="vetheuil06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil07.jpg")}
                alt="vetheuil07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil08.jpg")}
                alt="vetheuil08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/vetheuil/vetheuil09.jpg")}
                alt="vetheuil09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Vetheuil;
