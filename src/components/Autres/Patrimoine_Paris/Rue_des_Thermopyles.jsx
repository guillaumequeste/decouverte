import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Rue_des_Thermopyles extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Rue des Thermopyles Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/rue_des_thermopyles"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Rue des Thermopyles</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La rue des Thermopyles est une voie située dans le quartier de
              Plaisance du 14e arrondissement de Paris, en France. La rue des
              Thermopyles était à l'origine le passage des Thermopyles, créé
              pour desservir les parcelles d'un terrain acquis par Alexandre
              Chauvelot. Le passage des Thermopyles va s'agrandir en incluant le
              passage Léonidas. Le passage des Thermopyles va alors débuter
              impasse des Plantes pour finir rue de Vanves. En 1924, la partie
              de l'ancien passage Léonidas comprise entre l'impasse des Plantes
              et la rue Hippolyte-Maindron en est détachée et devient la rue
              Olivier-Noyer. En 1927, nouvelle amputation du passage des
              Thermopyles à l'occasion du prolongement de la rue Olivier-Noyer
              de la rue Hippolyte-Maindron jusqu'à la rue Didot. Dorénavant, la
              totalité de l'ancien passage Léonidas est repris par la rue
              Olivier-Noyer2. Initialement voie privée, elle prend la
              dénomination de rue en 1937 et est fermée par des chaînes jusqu'en
              1958. Elle devient une voie privée ouverte à la circulation le 23
              juin 1959.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rue_des_Thermopyles;
