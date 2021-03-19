import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Martyrium extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Crypte du martyrium de Saint Denis Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/martyrium"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Crypte du martyrium de Saint Denis</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/martyrium/martyrium.jpeg")}
              alt="martyrium"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La crypte du martyrium de saint Denis est un édifice religieux du
              quartier de Montmartre, au 11, rue Yvonne-Le-Tac, dans le 18e
              arrondissement de Paris. Elle est le lieu de plusieurs épisodes
              marquants de l'histoire religieuse. La crypte est censée se
              trouver sur le lieu de la décapitation de Denis de Paris, chrétien
              martyrisé au iiie siècle. Dès le ve siècle, Elle devient un lieu
              de pèlerinage où se rend notamment Geneviève de Paris1. En 1133,
              la reine Adèle de Savoie fonde l'abbaye de Montmartre, une abbaye
              féminine bénédictine, de qui relève la chapelle de la crypte qui
              tombait en ruine au xie siècle. Elle est consacrée par le pape
              Eugène III, Bernard de Clairvaux et Pierre le Vénérable, et reçoit
              en 1169 Thomas Becket en pèlerinage1. Le 15 août 1534, Ignace de
              Loyola, François Xavier, Pierre Favre et quatre autres compagnons
              y prononcent des vœux religieux de pauvreté et de chasteté, et
              font la promesse de se rendre en pèlerinage à Jérusalem tous les
              deux ans pour convertir les infidèles. Ce « vœu de Montmartre »
              est reçu par Pierre Favre, alors seul prêtre du groupe, au moment
              où il leur donne la communion. Il est à l'origine de la Compagnie
              de Jésus qui sera approuvée en 15401. Au cours de la restauration
              de la chapelle en 1611, un escalier qui mène à l'ancienne crypte
              est découvert. Des dizaines de milliers de Parisiens s'y rendent
              en pèlerinage et un prieuré, dépendant de l'abbaye qui se trouve
              au sommet de la colline, est fondé en 1613. Elle est généralement
              appelée « abbaye d'en bas » et prend son indépendance en 1682
              quand l'« abbaye d'en haut » est désaffectée et que sa chapelle
              devient église paroissiale2. L'abbaye est mise en vente sous la
              Terreur. Un petit oratoire est reconstruit en 1854 à l'emplacement
              présumé du martyrium et la crypte actuelle construite en
              1886-1887.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="http://cryptemartyrium-paris.cef.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crypte du martyrium de Saint Denis
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Martyrium;
