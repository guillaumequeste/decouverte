import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Pantheon extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Panthéon Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pantheon"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Panthéon</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/pantheon/pantheon.jpeg")}
              alt="pantheon"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Panthéon est un monument de style néo-classique situé dans le
              5e arrondissement de Paris. Au cœur du Quartier latin, sur la
              montagne Sainte-Geneviève, il est au centre de la place du
              Panthéon et entouré notamment de la mairie du 5e arrondissement,
              du lycée Henri-IV, de l'église Saint-Étienne-du-Mont, de la
              bibliothèque Sainte-Geneviève et de la faculté de droit. La rue
              Soufflot lui dessine une perspective jusqu'au jardin du
              Luxembourg. Prévu à l'origine, au xviiie siècle, pour être une
              église qui abriterait la châsse de sainte Geneviève, ce monument a
              depuis la Révolution française vocation à honorer de grands
              personnages ayant marqué l'Histoire de France hormis pour les
              carrières militaires normalement consacrées au Panthéon militaire
              des InvalidesNote 1. Y sont notamment inhumés Voltaire,
              Jean-Jacques Rousseau, Victor Hugo, Louis Braille, Sadi Carnot,
              Émile Zola, Jean Jaurès, Jean Moulin, Jean Monnet, Pierre et Marie
              Curie, André Malraux ou encore Alexandre Dumas, qui y fait son
              entrée en 2002. Germaine Tillion, Geneviève de Gaulle-Anthonioz,
              Jean Zay et Pierre Brossolette y font leur entrée le 27 mai 2015.
              Simone Veil, accompagnée de son époux Antoine Veil, y est inhumée
              depuis le 1er juillet 20182. Maurice Genevoix y fait son entrée le
              11 novembre 2020. L'architecture reprend notamment la façade du
              Panthéon de Rome, construit au ier siècle av. J.-C., surmontée
              d'un dôme qui s'inspire du Tempietto de l'église San Pietro in
              Montorio. Les différents dessins de sa construction, sa
              décoration, les inscriptions et les symboles qui y figurent
              permettent de parcourir la construction — lente et contrastée — de
              la nation française. Ce monument, considéré comme un lieu de
              mémoire, est ouvert au public et géré par le Centre des monuments
              nationaux.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="paris-pantheon.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Panthéon
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pantheon;
