import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Petite_Ceinture extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Petite Ceinture de Paris Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/petite_ceinture"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Petite Ceinture de Paris</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/petite_ceinture/petite_ceinture01.jpg")}
              alt="petite_ceinture01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La ligne de Petite Ceinture de Paris, communément désignée sous le
              nom de « Petite Ceinture », est une ligne de chemin de fer à
              double voie de 32 kilomètres de longueur faisant le tour de Paris
              à l'intérieur des boulevards des Maréchaux. Bien que faisant
              toujours partie du réseau ferré national, elle est aujourd'hui
              inutilisée sur la majeure partie de son parcours. Ouverte par
              tronçons de 1852 à 1869, la ligne a d'abord pour but de permettre
              aux trains de marchandises de contourner Paris en évitant les
              gares terminales. À partir de 1862, elle intègre la ligne
              d'Auteuil dans sa partie occidentale et s'ouvre aux voyageurs,
              offrant des services circulaires à travers les quartiers
              périphériques de la capitale. Après l'apogée du trafic à 38
              millions lors de l'exposition universelle de 1900, la Petite
              Ceinture connaît une longue période de déclin qui voit la ligne
              délaissée par les Parisiens en raison de la concurrence croissante
              du métropolitain et ses fréquences peu attractives. En
              conséquence, la ligne est définitivement fermée au trafic des
              voyageurs le 23 juillet 1934. Seule subsiste une partie de la
              ligne d'Auteuil, qui est intégrée depuis 1988 à la ligne C du RER
              pour former la nouvelle ligne d'Ermont - Eaubonne à Champ-de-Mars.
              La Petite Ceinture constitue la ligne 955 0001 du réseau ferré
              national sous le nom de « ligne de La Rapée à Batignolles », 971
              0001 pour la ligne d'Auteuil sous le nom de « ligne de
              Pont-Cardinet à Auteuil-Boulogne » et 980 0001 pour le tronçon
              suivant, sous le nom de « ligne d'Auteuil-Boulogne à La Rapée ».
              Laissées en friche, les infrastructures ont aujourd'hui été
              envahies par la végétation, ce qui donne à la ligne une atmosphère
              particulière et a permis le développement d'une biodiversité
              unique à Paris. Si l'accès demeure théoriquement interdit, la
              Petite Ceinture est donc particulièrement prisée des amateurs
              d'exploration urbaine et accueille, de temps en temps, des
              activités culturelles. La question de la réouverture ou de la
              reconversion de la Petite Ceinture est régulièrement au cœur des
              débats politiques parisiens. Depuis 2007, la municipalité a
              entrepris de transformer certaines portions en coulées vertes, le
              maintien de la plateforme laissant toutefois possible une future
              réouverture au trafic de voyageurs.
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
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture02.jpg")}
                alt="petite_ceinture02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture03.jpg")}
                alt="petite_ceinture03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture04.jpg")}
                alt="petite_ceinture04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture05.jpg")}
                alt="petite_ceinture05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture06.jpg")}
                alt="petite_ceinture06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture07.jpg")}
                alt="petite_ceinture07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture08.jpg")}
                alt="petite_ceinture08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture09.jpg")}
                alt="petite_ceinture09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture10.jpg")}
                alt="petite_ceinture10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture11.jpg")}
                alt="petite_ceinture11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture12.jpg")}
                alt="petite_ceinture12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture13.jpg")}
                alt="petite_ceinture13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture14.jpg")}
                alt="petite_ceinture14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture15.jpg")}
                alt="petite_ceinture15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture16.jpg")}
                alt="petite_ceinture16"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture17.jpg")}
                alt="petite_ceinture17"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture18.jpg")}
                alt="petite_ceinture18"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture19.jpg")}
                alt="petite_ceinture19"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture20.jpg")}
                alt="petite_ceinture20"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/petite_ceinture/petite_ceinture21.jpg")}
                alt="petite_ceinture21"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Petite_Ceinture;
