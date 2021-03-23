import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Cimetiere_Montparnasse extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Cimetière Montparnasse Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/cimetiere_montparnasse"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Cimetière du Montparnasse</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/cimetiere_montparnasse/cimetiere_montparnasse01.jpg")}
              alt="cimetiere_montparnasse01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le cimetière du Montparnasse est situé dans le 14e arrondissement
              de Paris. À l'origine, il se nommait cimetière du Sud. Il a été
              créé en 1824 lors de la mise en œuvre des premières politiques
              d'urbanisme et plus particulièrement à l'occasion de la mise en
              place d'un réseau de cimetières parisiens en dehors des anciennes
              limites de la capitale. D'une superficie de 19 hectares, il est
              délimité par la rue Froidevaux au sud, la rue Victor-Schœlcher à
              l'est, le boulevard Raspail au nord-est, le boulevard Edgar-Quinet
              au nord, et la rue de la Gaîté à l'ouest. Avec 35 000 concessions,
              il abrite le souvenir d'un grand nombre de personnalités : hommes
              politiques, personnalités religieuses, penseurs de la condition
              humaine, artistes exerçant dans les domaines les plus variés,
              artisans du progrès technique, explorateurs, etc. Ainsi, un
              certain nombre de tombes individuelles se font l'écho des
              évènements survenus au cours des deux derniers siècles qui ont
              marqué les esprits ou les cœurs. Par ailleurs, des monuments
              publics rappellent deux évènements dramatiques vécus par la
              capitale en 1870 et 1871 : le siège de Paris puis la Commune.
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cimetiere_montparnasse/cimetiere_montparnasse02.jpg")}
                alt="cimetiere_montparnasse02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cimetiere_montparnasse/cimetiere_montparnasse03.jpg")}
                alt="cimetiere_montparnasse03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cimetiere_montparnasse/cimetiere_montparnasse04.jpg")}
                alt="cimetiere_montparnasse04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cimetiere_Montparnasse;
