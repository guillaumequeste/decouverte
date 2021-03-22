import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Jardin_Tuileries extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Jardin des Tuileries Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/jardin_tuileries"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Jardin des Tuileries</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/jardin_tuileries/jardin_tuileries01.jpg")}
              alt="jardin_tuileries01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le jardin des Tuileries, parfois appelé jardins des Tuileries au
              pluriel, est un parc parisien du 1er arrondissement créé au xvie
              siècle, à l'emplacement d'anciennes tuileries qui lui ont donné
              son nom.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/71304/Jardin-des-Tuileries"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jardin des Tuileries
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_tuileries/jardin_tuileries02.jpg")}
                alt="jardin_tuileries02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_tuileries/jardin_tuileries03.jpg")}
                alt="jardin_tuileries03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_tuileries/jardin_tuileries04.jpg")}
                alt="jardin_tuileries04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_tuileries/jardin_tuileries05.jpg")}
                alt="jardin_tuileries05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Jardin_Tuileries;
