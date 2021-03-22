import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Palais_de_Justice extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Palais de Justice Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/palais_de_justice"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Palais de Justice de Paris</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/palais_de_justice/palais_de_justice01.jpg")}
              alt="palais_de_justice01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le palais de justice de Paris — le Palais de Justicea (en forme
              courte) — est situé dans le 1er arrondissement de la capitale
              française, sur l’île de la Cité, avec une emprise au sol d'environ
              quatre hectares (entre un cinquième et un sixième de la superficie
              de l'île). Il abrite la cour d'appel de Paris, la cour d'assises
              spéciale (affaires sensibles) et la Cour de cassation. Il entoure
              la Sainte-Chapelle, est contigu au 36, quai des Orfèvres et est
              voisin du tribunal de commerce, de la préfecture de police et du
              Barreau de Paris. Le Tribunal judiciaire de Paris (anciennement
              Tribunal de grande instance de Paris) était aussi hébergé dans le
              palais de justice, et a déménagé en 2018 dans un nouveau Palais de
              Justice : le Tribunal de Paris.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Palais_de_Justice;
