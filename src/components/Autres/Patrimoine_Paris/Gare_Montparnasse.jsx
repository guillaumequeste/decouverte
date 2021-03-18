import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Gare_Montparnasse extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Gare Montparnasse Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/gare_montparnasse"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Gare Montparnasse</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/gare_montparnasse/gare_montparnasse.jpeg")}
              alt="gare_montparnasse"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La gare de Paris-Montparnasse, dite aussi gare Montparnasse, est
              l'une des six grandes gares ferroviaires terminus parisiennes.
              Elle est située à Montparnasse, sur la rive gauche de la Seine, à
              cheval sur les 14e et 15e arrondissements (respectivement dans les
              quartiers Plaisance et Necker). Le premier « débarcadère » est mis
              en service en 1840, et le premier bâtiment important est ouvert en
              1859. Plus tard, elle devient la grande gare de la compagnie des
              chemins de fer de l'Ouest, puis de l'Administration des chemins de
              fer de l'État, avant d'intégrer en 1938 le nouveau réseau de la
              Société nationale des chemins de fer français (SNCF). C'est une
              gare de grandes lignes, terminus nord de la LGV Atlantique,
              permettant d'assurer des relations en TGV vers des destinations du
              Grand Ouest et, depuis la mise en service de la LGV précitée en
              1990, du Centre-Val de Loire et du Grand Sud-Ouest de la France
              (en récupérant une partie du trafic de la gare d'Austerlitz).
              C'est également une gare régionale, avec des relations TER
              Normandie et TER Centre-Val de Loire, ainsi que la ligne N du
              Transilien.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gare_Montparnasse;
