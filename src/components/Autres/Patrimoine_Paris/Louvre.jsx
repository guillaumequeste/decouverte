import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Louvre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Musée du Louvre Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/louvre"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée du Louvre</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/louvre/louvre01.jpg")}
              alt="louvre01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée du Louvre est un musée situé dans le 1er arrondissement
              de Paris, en France. Une préfiguration en est imaginée en
              1775-1776 par le comte d'Angiviller, directeur général des
              Bâtiments du roi, comme lieu de présentation des chefs-d'œuvre de
              la collection de la Couronne. Ce musée n'a été inauguré qu'en 1793
              sous l'appellation de Muséum central des arts de la République
              dans le palais du Louvre, ancienne résidence royale située au
              centre de Paris, et il est aujourd'hui le plus grand musée d'art
              et d'antiquités au monde. Sa surface d'exposition est de 72 735
              m28. Fin 2016, ses collections comprenaient 554 731 œuvres, dont
              35 000 exposées et 264 486 œuvres graphiques. Celles-ci présentent
              l'art occidental du Moyen Âge à 1848, celui des civilisations
              antiques qui l'ont précédé et influencé (orientales, égyptienne,
              grecque, étrusque et romaine), les arts des premiers chrétiens et
              de l'islam. Situé dans le 1er arrondissement de Paris, sur la rive
              droite entre la Seine et la rue de Rivoli, le musée se signale par
              la pyramide de verre de son hall d'accueil, érigée en 1989 dans la
              cour Napoléon et qui en est devenue emblématique, tandis que la
              statue équestre de Louis XIV constitue le point de départ de l'axe
              historique parisien. En 2018, avec environ 10,2 millions de
              visiteurs annuels, le Louvre est le musée le plus visité au monde.
              Il est le site culturel payant le plus visité de France. Parmi ses
              pièces les plus célèbres figurent La Joconde, la Vénus de Milo, Le
              Scribe accroupi, La Victoire de Samothrace et le Code de
              Hammurabi. Le Louvre possède une longue histoire de conservation
              artistique et historique, depuis l'Ancien Régime jusqu'à nos
              jours. À la suite du départ de Louis XIV pour le château de
              Versailles à la fin du xviie siècle, on y entrepose une partie des
              collections royales de tableaux et de sculptures antiques. Après
              avoir durant un siècle hébergé plusieurs académies dont celle de
              peinture et de sculpture, ainsi que divers artistes logés par le
              roi, l'ancien palais royal est véritablement transformé sous la
              Révolution en « Muséum central des arts de la République ». Il
              ouvre en 1793 en exposant environ 660 œuvres, essentiellement
              issues des collections royales ou confisquées chez des nobles
              émigrés ou dans des églises. Par la suite les collections ne
              cesseront de s'enrichir par des prises de guerre, acquisitions,
              mécénats, legs, donations, et découvertes archéologiques. Le musée
              compte pour sa gestion 2 091 employés (fonctionnaires,
              contractuels et vacataires), dont 1 232 agents de surveillance, un
              garde pour chacune des 403 salles d’exposition, que complètent les
              effectifs affectés aux 900 caméras du système de
              télésurveillance.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.louvre.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée du Louvre
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/louvre/louvre02.jpg")}
                alt="louvre02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/louvre/louvre03.jpg")}
                alt="louvre03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/louvre/louvre04.jpg")}
                alt="louvre04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/louvre/louvre05.jpg")}
                alt="louvre05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/louvre/louvre06.jpg")}
                alt="louvre06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/louvre/louvre07.jpg")}
                alt="louvre07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Louvre;
