import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Arc_de_Triomphe extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Arc de Triomphe Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/arc_de_triomphe"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Arc de Triomphe</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_triomphe/arc_triomphe01.jpg")}
              alt="arc_de_triomphe01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L'arc de triomphe de l’Étoile, souvent appelé simplement l'Arc de
              Triomphe1, est un monument situé à Paris, en un point haut à la
              jonction des territoires des 8e, 16e et 17e arrondissements,
              notamment au sommet de l'avenue des Champs-Élysées et de l'avenue
              de la Grande-Armée, lesquelles constituent un grand axe est-ouest
              parisien partant de la pyramide du Louvre, passant par l'obélisque
              de La Concorde, l'Arc de Triomphe lui-même et se terminant au loin
              par l'Arche de la Défense. Sa construction, décidée par l'empereur
              Napoléon Ier, débute en 1806 et s'achève en 1836 sous le règne de
              Louis-Philippe.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.paris-arc-de-triomphe.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arc de Triomphe
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/arc_triomphe/arc_triomphe02.jpg")}
                alt="arc_triomphe02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/arc_triomphe/arc_triomphe03.jpg")}
                alt="arc_triomphe03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/arc_triomphe/arc_triomphe04.jpg")}
                alt="arc_triomphe04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/arc_triomphe/arc_triomphe05.jpg")}
                alt="arc_triomphe05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/arc_triomphe/arc_triomphe06.jpg")}
                alt="arc_triomphe06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/arc_triomphe/arc_triomphe07.jpg")}
                alt="arc_triomphe07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/arc_triomphe/arc_triomphe08.jpg")}
                alt="arc_triomphe08"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Arc_de_Triomphe;
