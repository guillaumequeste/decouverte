import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Catacombes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Catacombes de Paris Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/catacombes"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Catacombes de Paris</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/catacombes/catacombes.jpeg")}
              alt="catacombes"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Les catacombes de ParisÉcouter, terme utilisé pour nommer
              l'ossuaire municipal, sont à l'origine une partie des anciennes
              carrières souterraines situées dans le 14e arrondissement de
              Paris, reliées entre elles par des galeries d'inspection. Elles
              sont transformées en ossuaire municipal à la fin du xviiie siècle
              avec le transfert des restes d'environ six millions d'individus,
              évacués des divers cimetières parisiens jusqu'en 1861 pour des
              raisons de salubrité publique. Elles prennent alors le nom
              abusif[réf. nécessaire] de « catacombes », par analogie avec les
              nécropoles souterraines de la Rome antique, bien qu'elles n'aient
              jamais officiellement servi de lieu de sépulture. D'environ 1,7 km
              de long visitable, situées à vingt mètres sous la surface, elles
              sont officiellement visitées par environ 500 000 visiteurs par an
              (chiffres de 2015) à partir de la place Denfert-Rochereau et
              constituent un musée de la ville de Paris, dépendant du musée
              Carnavalet. Cette partie ouverte au public ne représente qu'une
              infime fraction (environ 0,5 %)[réf. nécessaire] des vastes
              carrières souterraines de Paris, qui s'étendent sous plusieurs
              arrondissements de la capitale. Il existe aussi d'autres ossuaires
              souterrains à Paris, inaccessibles au public.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.catacombes.paris.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Catacombes de Paris
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Catacombes;
