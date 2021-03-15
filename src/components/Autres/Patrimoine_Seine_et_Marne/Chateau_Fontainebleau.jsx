import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Chateau_Fontainebleau extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Château Fontainebleau Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/chateau_fontainebleau"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Château de Fontainebleau</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/chateau_fontainebleau/chateau_fontainebleau01.jpg")}
              alt="chateau_fontainebleau01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le château de Fontainebleau est un château royal de styles
              principalement Renaissance et classique, près du centre-ville de
              Fontainebleau (Seine-et-Marne), à une soixantaine de kilomètres au
              sud-est de Paris, en France. Les premières traces d'un château à
              Fontainebleau remontent au xiie siècle. Les derniers travaux sont
              effectués au xixe siècle. Haut lieu de l'histoire de France, le
              château de Fontainebleau est l'une des demeures des souverains
              français depuis François Ier, qui en fait sa demeure favorite,
              jusqu'à Napoléon III. Plusieurs rois laissent leur empreinte dans
              la construction et l'histoire du château, qui est ainsi un témoin
              des différentes phases de l'histoire de France depuis le Moyen
              Âge. Entouré d'un vaste parc et voisin de la forêt de
              Fontainebleau, le château se compose d'éléments de styles
              médiévaux, Renaissance, et classiques. Il témoigne de la rencontre
              entre l'art italien et la tradition française exprimée tant dans
              son architecture que dans ses décors intérieurs. Cette spécificité
              s'explique par la volonté de François Ier de créer à Fontainebleau
              une « nouvelle Rome »1,N 1 dans laquelle les artistes italiens
              viennent exprimer leur talent et influencer l'art français. C'est
              ainsi que naît l'École de Fontainebleau, qui représente la période
              la plus riche de l'art renaissant en France, et inspire la
              peinture française jusqu'au milieu du xviie siècle, voire au-delà.
              Napoléon Ier surnomme ainsi le château la « maison des siècles »2,
              évoquant par là les souvenirs historiques dont les lieux sont le
              témoignage. Le château fait l’objet d'un classement au titre des
              monuments historiques par la liste de 1862, classement complété
              par plusieurs arrêtés pris en 1913, 1930, 2008 et 20093. Par
              ailleurs, depuis 1981, le château fait partie avec son parc du
              patrimoine mondial de l'UNESCO. Riche d'un cadre architectural de
              premier ordre, le château de Fontainebleau possède également une
              des plus importantes collections de mobilier ancien de France, et
              conserve une exceptionnelle collection de peintures, de
              sculptures, et d'objets d'art, allant du vie au xixe siècle.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="https://www.chateaudefontainebleau.fr" target="_blank" rel="noopener noreferrer">
                Château de Fontainebleau
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/chateau_fontainebleau/chateau_fontainebleau02.jpg")}
                alt="chateau_fontainebleau02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/chateau_fontainebleau/chateau_fontainebleau03.jpg")}
                alt="chateau_fontainebleau03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/chateau_fontainebleau/chateau_fontainebleau04.jpg")}
                alt="chateau_fontainebleau04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/chateau_fontainebleau/chateau_fontainebleau05.jpg")}
                alt="chateau_fontainebleau05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Chateau_Fontainebleau;
