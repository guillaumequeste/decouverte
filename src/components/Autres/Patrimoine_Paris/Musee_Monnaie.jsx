import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Monnaie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Musée de la Monnaie de Paris Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/musee_orsay"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée de la Monnaie de Paris</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_monnaie/musee_monnaie.jpeg")}
              alt="musee_monnaie"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée du 11 Conti est un musée consacré au savoir-faire de la
              Monnaie de Paris. Il présente des vues directes sur certains
              ateliers de la dernière usine dans Paris, les techniques de
              fabrication et les métaux utilisés, du matériel servant à sa
              fabrication. Le musée est très interactif et le visiteur est
              acteur de sa visite. Le musée est rattaché à l'institution qui
              fabrique la monnaie en France, la Monnaie de Paris. Il est situé
              dans l'hôtel de la Monnaie, 11 quai de Conti à Paris. À la suite
              du lancement du projet « MétaLmorphoses » qui a transformé le
              site, le musée a fermé ses portes entre juillet 2010 et septembre
              2017.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.monnaiedeparis.fr/fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée de la Monnaie de Paris
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Monnaie;
