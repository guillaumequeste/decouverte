import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Le_Plessis extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_plessis"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"le_val_pitant"} />
          <h1 className="title">Panorama du Plessis</h1>
          <Next next={"la_roquette"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/le_plessis/le_plessis01.jpg")}
              alt="le_plessis01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis02.jpg")}
                alt="le_plessis02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis03.jpg")}
                alt="le_plessis03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis04.jpg")}
                alt="le_plessis04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis05.jpg")}
                alt="le_plessis05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis06.jpg")}
                alt="le_plessis06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis07.jpg")}
                alt="le_plessis07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis08.jpg")}
                alt="le_plessis08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis09.jpg")}
                alt="le_plessis09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis10.jpg")}
                alt="le_plessis10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis11.jpg")}
                alt="le_plessis11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/le_plessis/le_plessis12.jpg")}
                alt="le_plessis12"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Plessis;
