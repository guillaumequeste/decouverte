import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Basilique_Saint_Denis extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Basilique de Saint-Denis Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/basilique_saint-denis"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Basilique Saint-Denis</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis01.jpg")}
              alt="basilique_saint-denis01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La basilique Saint-Denis est une église de style gothique située
              au centre de la ville de Saint-Denis, à 5 kilomètres au nord de
              Paris dans le département français de Seine-Saint-Denis en région
              Île-de-France. Fondée à l'origine en tant qu'abbatiale, elle a le
              statut de cathédrale du diocèse de Saint-Denis depuis 19661.
              L'ancienne abbaye royale de Saint-Denis est associée à l'histoire
              du monde des Francs. L'église abbatiale a été dénommée « basilique
              » dès l'époque mérovingienne (comme beaucoup d'autres églises).
              Elle s'élève sur l'emplacement d'un cimetière gallo-romain, lieu
              de sépulture de saint Denis martyrisé vers 250. Le transept de
              l'église abbatiale, d'une ampleur exceptionnelle, était destiné à
              accueillir les tombeaux royaux. Elle est ainsi la nécropole des
              rois de France depuis les Robertiens et Capétiens directs, même si
              plusieurs rois mérovingiens puis carolingiens avaient choisi d'y
              reposer avant eux. La basilique Saint-Denis fait l’objet d’un
              classement au titre des monuments historiques par la liste de
              18622. Le jardin qui l'entoure fait l’objet d’un classement au
              titre des monuments historiques depuis le 19 août 19262. La
              basilique est desservie à 400 mètres par la ligne 1 du tramway et
              par la ligne 13 du métro à la station Basilique de Saint-Denis.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.saint-denis-basilique.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basilique Saint-Denis
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis02.jpg")}
                alt="basilique_saint-denis02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis03.jpg")}
                alt="basilique_saint-denis03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis04.jpg")}
                alt="basilique_saint-denis04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis05.jpg")}
                alt="basilique_saint-denis05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis06.jpg")}
                alt="basilique_saint-denis06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis07.jpg")}
                alt="basilique_saint-denis07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis08.jpg")}
                alt="basilique_saint-denis08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis09.jpg")}
                alt="basilique_saint-denis09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis10.jpg")}
                alt="basilique_saint-denis10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis11.jpg")}
                alt="basilique_saint-denis11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis12.jpg")}
                alt="basilique_saint-denis12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis13.jpg")}
                alt="basilique_saint-denis13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/basilique_saint-denis/basilique_saint-denis14.jpg")}
                alt="basilique_saint-denis14"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Basilique_Saint_Denis;
