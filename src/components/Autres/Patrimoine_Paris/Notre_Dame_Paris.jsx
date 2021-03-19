import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Notre_Dame_Paris extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Cathédrale Notre-Dame de Paris Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/notre_dame_paris"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Cathédrale Notre-Dame de Paris</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_grevin/musee_grevin.png")}
              alt="musee_grevin"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La cathédrale Notre-Dame de Paris, communément appelée Notre-Dame,
              est l'un des monuments les plus emblématiques de Paris et de la
              France. Elle est située sur l'île de la Cité et est un lieu de
              culte catholique, siège de l'archidiocèse de Paris, dédiée à la
              Vierge Marie. Commencée sous l'impulsion de l'évêque Maurice de
              Sully, sa construction s'étend sur plus de deux siècles, de 1163
              au milieu du xive siècle. Après la Révolution française, la
              cathédrale bénéficie entre 1844 et 1864 d'une importante
              restauration, parfois controversée, sous la direction de
              l'architecte Viollet-le-Duc, qui y incorpore des éléments et des
              motifs inédits. Pour ces raisons, le style n'est pas d'une
              uniformité totale : la cathédrale possède des caractères du
              gothique primitif et du gothique rayonnant. Les deux rosaces qui
              ornent chacun des bras du transept sont parmi les plus grandes
              d'Europe. Elle est liée à de nombreux épisodes de l'histoire de
              France. Église paroissiale royale au Moyen Âge, elle accueille
              l'arrivée de la Sainte Couronne en 1239, puis le sacre de Napoléon
              Ier en 1804, le baptême d'Henri d'Artois, le duc de Bordeaux, en
              1821, ainsi que les funérailles de plusieurs présidents de la
              République française (Adolphe Thiers, Sadi Carnot, Paul Doumer,
              Charles de Gaulle, Georges Pompidou, François Mitterrand). C'est
              aussi sous ses voûtes qu'est chanté un Magnificat lors de la
              libération de Paris, en 1944. Le 850e anniversaire de sa
              construction est célébré en 2013. La cathédrale inspire de
              nombreuses œuvres artistiques, notamment le roman de Victor Hugo
              Notre-Dame de Paris paru en 1831 et qui influence en partie son
              histoire. Au début du xxie siècle, Notre-Dame est visitée chaque
              année par quelque 13 à 14 millions de personnes. L'édifice, aussi
              basilique mineure, est ainsi le monument le plus visité en Europe
              et l'un des plus visités au monde jusqu'en 2019. Le violent
              incendie du 15 avril 2019 détruit la flèche et la totalité de la
              toiture couvrant la nef, le chœur et le transept. Il s'agit du
              plus important sinistre subi par la cathédrale depuis sa
              construction. Notre-Dame est, depuis cette date, fermée au public
              pour une durée indéterminée. Sa reconstruction à l'identique est
              décidée en 2020 par le président Emmanuel Macron, qui a promis sa
              réouverture au public pour 2024.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.notredamedeparis.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cathédrale Notre-Dame de Paris
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Notre_Dame_Paris;
