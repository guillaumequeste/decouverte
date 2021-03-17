import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class BNF extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Bibliothèque nationale de France Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/bnf"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Bibliothèque nationale de France</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/bnf/bnf.jpeg")}
              alt="bnf"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La Bibliothèque nationale de France (BnF), ainsi dénommée depuis
              1994, est la bibliothèque nationale de la République française,
              inaugurée sous cette nouvelle appellation le 30 mars 1995 par le
              président de la République, François Mitterrand. Héritière des
              collections royales constituées depuis le Moyen Âge, elle possède
              l'un des fonds les plus riches du monde. La BnF a une mission de
              collecte, d’archivage et d’entretien (conservation, restauration),
              en particulier de tout ce qui se publie ou s'édite en France,
              ainsi que du patrimoine hérité des collections antérieures et reçu
              par d'autres voies (dons, legs, achats), mais aussi des activités
              de recherche et de diffusion de la connaissance, grâce notamment à
              l’organisation régulière d’expositions à destination du grand
              public et de multiples manifestations culturelles, conférences,
              colloques, concerts, dans ses locaux et sur son site Internet.
              Elle anime un réseau de coopération avec d'autres services
              documentaires en France et participe à différentes formes de
              coopération internationale en la matière. Première institution
              chargée de la collecte du dépôt légal, à partir de 15371, elle est
              la plus importante bibliothèque de France et l’une des plus
              importantes au monde. Elle a le statut d’établissement public à
              caractère administratif. Ses activités sont réparties sur sept
              sites, dont le principal est la bibliothèque du site
              François-Mitterrand ou Tolbiac, située dans le 13e arrondissement
              de Paris, sur la rive gauche de la Seine. Le site historique,
              datant du xviie siècle, qui occupe désormais un îlot entier, se
              trouve dans le 2e arrondissement de Paris, sur le lieu du palais
              Mazarin qui hébergeait également la Bourse de Paris au xviiie
              siècle. On a coutume de le nommer « quadrilatère Richelieu », du
              nom de la rue de son entrée principale. La Bibliothèque nationale
              de France comporte quatorze départements et plusieurs collections
              principalement conservées sur ses quatre sites parisiens, y
              compris le Département des monnaies, médailles et antiques,
              héritier du Cabinet des Médailles. L'ensemble des collections
              représente environ 40 millions de documents imprimés et
              spécialisés. Hors de Paris, elle comprend la maison Jean-Vilar à
              Avignon et deux centres techniques de conservation à
              Bussy-Saint-Georges et Sablé-sur-Sarthe. Ses collections s'élèvent
              à un nombre total de 15 millions de livres et d’imprimés ainsi que
              plusieurs millions de périodiques, comptés pour 390 000 titres.
              Avec 10 000 manuscrits enluminés médiévaux, elle est la première
              bibliothèque au monde dans ce domaine, mais elle compte plus
              largement environ 250 000 manuscrits, des cartes, estampes,
              photographies, partitions, monnaies, médailles, documents sonores,
              vidéos, multimédias, numériques ou informatiques (16,5 milliards
              d'adresses URL), des objets et objets d’art, décors et costumes,
              etc. Chaque année, la bibliothèque reçoit plus de 70 000 livres
              par dépôt légal ainsi que plus de 250 000 numéros de périodiques
              et des milliers de documents spécialisés, mais elle procède aussi
              à des achats et reçoit des dons. Le dépôt légal du Web a quant à
              lui préservé près d'1 Po de données. Une grande partie des
              références est consultable en ligne sur le catalogue général de la
              BnF et ses catalogues spécialisés. La BnF est également connue
              pour sa bibliothèque numérique, Gallica, qui permet de consulter
              directement la reproduction de plus de 7 600 000 de documents sous
              format texte, image ou son2. Le site François-Mitterrand accueille
              également l'Inathèque de France, chargée du dépôt légal de la
              radio-télévision et comportant aussi un fonds de cinéma. La
              dénomination « Bibliothèque nationale de France » est celle de
              l'établissement public, qui regroupe sept sites. L'appellation
              officielle du site de Tolbiac est « site François-Mitterrand ».
              Elle a été donnée à la demande du président de la République,
              Jacques Chirac, et ne fut pas toujours celle employée dans le
              langage courant. Certains disaient parfois, au moins jusqu'en 1999
              : la « Très Grande Bibliothèque » (TGB).
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.bnf.fr/fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bibliothèque nationale de France
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BNF;
