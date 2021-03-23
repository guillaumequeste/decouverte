import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Centre_Pompidou extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Centre Pompidou Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/centre_pompidou"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">
            Centre national d'art et de culture Georges-Pompidou
          </h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/centre_pompidou/centre_pompidou01.jpeg")}
              alt="centre_pompidou01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le centre national d’art et de culture Georges-Pompidou (CNAC) –
              communément appelé « centre Georges-Pompidou », « centre Pompidou
              » ou « centre Beaubourg » et familièrement « Beaubourg » – est un
              établissement pluridisciplinaire né de la volonté du président
              Georges Pompidou, grand amateur d'art moderne, de créer au cœur de
              Paris une institution culturelle originale entièrement vouée à la
              création moderne et contemporaine où les arts plastiques
              voisineraient avec les livres, le dessin, la musique, le spectacle
              vivant, les activités pour les jeunes publics, ainsi que le
              cinéma. Il est situé dans le quartier Saint-Merri, dans le 4e
              arrondissement de Paris, entre le quartier des Halles, à l'ouest,
              et le Marais, à l'est. Il emploie un milliers de personnes (1
              075,8 ETPT dont 1 009,8 sous plafond d’emploi et 66 hors plafond
              d’emploi en 2019) et a un budget en recettes de 119,7 M€, composé
              pour l’essentiel de 78,5 M€ de subventions de l’État et de 41,2 M€
              de recettes propres1. Inauguré le 31 janvier 1977, le centre
              Pompidou a accueilli, en 2019, 3 273 867 visiteurs2, soit une
              moyenne de 10 595 visites par jour. Au sein du musée national
              d'Art moderne / centre de création industrielle (MNAM / CCI), il
              conserve l'une des deux plus importantes collections d'art moderne
              et contemporain au monde, et la première d'Europe avec 113 675
              œuvres3 de 6 000 artistes au 1er janvier 2019. Il abrite également
              d'importantes galeries d'expositions temporaires, des salles de
              spectacles et de cinéma, et la Bibliothèque publique d'information
              (BPI), première bibliothèque publique de lecture en Europe. De
              part et d'autre de la Piazza, deux bâtiments annexes accueillent
              l'Institut de recherche et coordination acoustique/musique (IRCAM)
              et l'atelier Brancusi.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.centrepompidou.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centre Pompidou
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou02.jpg")}
                alt="centre_pompidou02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou03.jpg")}
                alt="centre_pompidou03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou04.jpg")}
                alt="centre_pompidou04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou05.jpg")}
                alt="centre_pompidou05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou06.jpg")}
                alt="centre_pompidou06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou07.jpg")}
                alt="centre_pompidou07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou08.jpg")}
                alt="centre_pompidou08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/centre_pompidou/centre_pompidou09.jpg")}
                alt="centre_pompidou09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Centre_Pompidou;
