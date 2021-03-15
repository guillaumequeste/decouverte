import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Basilique_Lisieux extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/basilique_lisieux"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Basilique Sainte-Thérèse de Lisieux</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/basilique_lisieux/basilique_lisieux01.jpg")}
              alt="basilique_lisieux01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La basilique Sainte-Thérèse est située à Lisieux, en Normandie.
              Elle a été élevée en l'honneur de sainte Thérèse de l'Enfant Jésus
              peu de temps après sa canonisation. Imposant édifice de style
              néo-byzantin inspiré de la basilique du Sacré-Cœur de Montmartre,
              sa construction, sur une hauteur en limite de la ville, a débuté
              en 1929 et sa consécration a eu lieu en 1954. Aujourd'hui,
              l'édifice accueille plus de 600 000 visiteurs par an1. Labellisée
              « Patrimoine du xxe siècle »2, elle a été inscrite au titre des
              monuments historiques le 14 septembre 20103 puis classée le 7
              septembre 20114.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.therese-de-lisieux.catholique.fr/lisieux/la-basilique/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basilique Sainte-Thérèse de Lisieux
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_lisieux/basilique_lisieux02.jpg")}
                alt="basilique_lisieux02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_lisieux/basilique_lisieux03.jpg")}
                alt="basilique_lisieux03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_lisieux/basilique_lisieux04.jpg")}
                alt="basilique_lisieux04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_lisieux/basilique_lisieux05.jpg")}
                alt="basilique_lisieux05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_lisieux/basilique_lisieux06.jpg")}
                alt="basilique_lisieux06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Basilique_Lisieux;
