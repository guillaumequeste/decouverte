import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Invalides extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Hôtel des Invalides Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/invalides"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Hôtel des Invalides</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/invalides/invalides.jpeg")}
              alt="invalides"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L’hôtel des Invalides est un monument parisien dont la
              construction fut ordonnée par Louis XIV par l'édit royal du 24
              février 16702, pour accueillir les invalides de ses armées.
              Demeuré fidèle à cette mission, il abrite également la cathédrale
              Saint-Louis des Invalides, plusieurs musées et une nécropole
              militaire avec notamment le tombeau de Napoléon Ier. Siège de
              hautes autorités militaires comme le gouverneur militaire de
              Paris, il rassemble aussi nombre d'organismes dédiés à la mémoire
              des anciens combattants et au soutien des soldats blessés. Cet
              immense complexe architectural, conçu par Libéral Bruand et Jules
              Hardouin-Mansart, est un des chefs-d’œuvre les plus importants de
              l'architecture classique française. Ce site est desservi par les
              stations de métro Invalides, Varenne et La Tour-Maubourg. Avant
              1860, il était situé dans le 10e arrondissement « ancien » d'où
              l'enregistrement du décès des militaires dans l'« état civil
              reconstitué » de la capitale qu'on peut trouver dans différentes
              bases de données.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Invalides;
