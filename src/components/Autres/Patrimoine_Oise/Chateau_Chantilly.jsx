import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Chateau_Chantilly extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/chateau_chantilly"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Château de Chantilly</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/chateau_chantilly/chateau_chantilly.jpg")}
              alt="chateau_dieppe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le château de Chantilly est un château français situé à Chantilly,
              dans le département de l'Oise, en région des Hauts-de-France, dans
              la vallée de la Nonette, affluent de l'Oise. À l'exception du «
              Petit Château », construit au xvie siècle par Jean Bullant, le
              château actuel est une reconstruction du xixe siècle sur des plans
              de l'architecte Honoré Daumet pour l'avant-dernier fils du roi
              Louis-Philippe Ier, Henri d'Orléans, duc d'Aumale (1822-1897),
              héritier du domaine, qui y installa ses collections de peintures,
              de dessins et de livres anciens. Il lègue l'ensemble à l'Institut
              de France, sous le nom de musée Condé. Le château occupe
              l'emplacement d'une forteresse médiévale. Les Grandes Écuries,
              construites de 1719 à 1740, chef-d'œuvre de l'architecte Jean
              Aubert abritent aujourd'hui le musée du cheval. Les jardins sont
              une des plus remarquables créations d'André Le Nôtre. La ville de
              Chantilly s'est développée à l'ouest du château pendant et après
              la Révolution française. Le château et ses dépendances font
              l'objet de plusieurs protections au titre des monuments
              historiques durant l’année 19881 après une première protection par
              arrêté du 2 avril 1963, annulée.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="https://domainedechantilly.com/fr/" target="_blank">
                Domaine de Chantilly
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chateau_Chantilly;
