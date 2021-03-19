import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Sacre_Coeur extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Basilique du Sacré-Coeur Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/sacre-coeur"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Basilique du Sacré-Coeur</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/sacre-coeur/sacre-coeur.jpeg")}
              alt="sacre-coeur"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La basilique du Sacré-Cœur de Montmartre, dite du Vœu national,
              située au sommet de la butte Montmartre, dans le quartier de
              Clignancourt du 18e arrondissement de Paris (France), est un
              édifice religieux parisien majeur, « sanctuaire de l'adoration
              eucharistique et de la miséricorde divine » et propriété de
              l'archidiocèse de Paris1. La construction de cette église,
              monument à la fois politique et culturel, suit l'après-guerre de
              1870. Elle est déclarée d'utilité publique par une loi votée le 24
              juillet 1873 par l'Assemblée nationale de 1871 ; le bâtiment est
              officiellement achevé en 1923. Elle s'inscrit dans le contexte de
              recharge sacrale et dans le cadre d'un nouvel « ordre moral »2
              faisant suite aux événements de la Commune de Paris, dont
              Montmartre fut un des hauts lieux. Sa situation à 130 m d'altitude
              près de l'un des points culminants de Paris, et son dôme qui
              s'élève à 83 mètres, la rendent visible de très loin. Avec près de
              onze millions de pèlerins et visiteurs par an, c'est le deuxième
              monument religieux parisien le plus visité après la cathédrale
              Notre-Dame de Paris.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.paris.fr/pages/la-petite-ceinture-et-ses-promenades-ecologiques-7855"
                target="_blank"
                rel="noopener noreferrer"
              >
                Petite Ceinture de Paris
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sacre_Coeur;
