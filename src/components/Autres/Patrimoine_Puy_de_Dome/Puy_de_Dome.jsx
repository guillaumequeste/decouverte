import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Puy_de_Dome extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Puy de Dôme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/tapisserie_bayeux"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Puy de Dôme</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/puy_de_dome/puy_de_dome01.jpg")}
              alt="puy_de_dome01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le puy de Dôme est un volcan endormi de la chaîne des Puys, dans
              le Massif central. Il se trouve à une quinzaine de kilomètres de
              Clermont-Ferrand et a donné son nom au département du Puy-de-Dôme.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.panoramiquedesdomes.fr/page/le-puy-de-dome"
                target="_blank"
              >
                Puy de Dôme
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome02.jpg")}
                alt="puy_de_dome02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome03.jpg")}
                alt="puy_de_dome03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome04.jpg")}
                alt="puy_de_dome04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome05.jpg")}
                alt="puy_de_dome05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome06.jpg")}
                alt="puy_de_dome06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome07.jpg")}
                alt="puy_de_dome07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome08.jpg")}
                alt="puy_de_dome08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome09.jpg")}
                alt="puy_de_dome09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome10.jpg")}
                alt="puy_de_dome10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome11.jpg")}
                alt="puy_de_dome11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome12.jpg")}
                alt="puy_de_dome12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome13.jpg")}
                alt="puy_de_dome13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/puy_de_dome/puy_de_dome14.jpg")}
                alt="puy_de_dome14"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Puy_de_Dome;
