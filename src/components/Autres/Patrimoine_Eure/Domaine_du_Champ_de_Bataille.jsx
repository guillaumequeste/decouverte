import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Domaine_du_Champ_de_Bataille extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={
            "http://decouverte.guillaumequeste.fr/domaine_du_champ_de_bataille"
          }
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Domaine du Champ de Bataille</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/domaine_du_champ_de_bataille/domaine_du_champ_de_bataille.jpg")}
              alt="domaine_du_champ_de_bataille"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Champ de Bataille est indéniablement l'une des plus fastueuses
              demeures de Normandie. Situé au milieu d'un parc de 138 ha, ce
              superbe Château ducal du XVIIè siècle se compose de deux
              constructions jumelles en briques et en pierres, aux lignes
              basses. Le Château et ses jardins ont été somptueusement restaurés
              par le célèbre architecte d'intérieur Jacques Garcia. Les
              intérieurs très richement décorés et meublés, vous donnent une
              idée précise de l'art de vivre au XVIIè siècle. Les magnifiques
              jardins à la française, oeuvre d'une reconstitution titanesque,
              proposent aux visiteurs une découverte époustouflante de la
              philosophie de l'humanité à travers les 7 degrés de la création.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.chateauduchampdebataille.com/"
                target="_blank"
              >
                Domaine du Champ de Bataille
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Domaine_du_Champ_de_Bataille;
