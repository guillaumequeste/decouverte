import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Domaine_Saint_Cloud extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Domaine national de Saint-Cloud Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/domaine_saint-cloud"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Domaine national de Saint-Cloud</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud01.jpg")}
              alt="domaine_saint-cloud01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le domaine national de Saint-Cloud, plus communément appelé parc
              de Saint-Cloud, est un parc situé sur les territoires des communes
              de Saint-Cloud (majoritairement), Marnes-la-Coquette et Sèvres
              dans le département des Hauts-de-Seine, près de Paris. Avec ses
              460 hectares, le parc de Saint-Cloud, site naturel protégé depuis
              1923, a obtenu en 2005 le label Jardin remarquable. Le domaine a
              été classé à l'inventaire des monuments historiques dès 19001,2.
              La tempête de décembre 1999 a fortement endommagé la forêt, dont
              la restauration continue. Le parc abrite le pavillon de Breteuil,
              lieu de conservation du mètre-étalon de 1889.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="http://www.domaine-saint-cloud.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Domaine national de Saint-Cloud
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud02.jpg")}
                alt="domaine_saint-cloud02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud03.jpg")}
                alt="domaine_saint-cloud03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud04.jpg")}
                alt="domaine_saint-cloud04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud05.jpg")}
                alt="domaine_saint-cloud05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud06.jpg")}
                alt="domaine_saint-cloud06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud07.jpg")}
                alt="domaine_saint-cloud07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud08.jpg")}
                alt="domaine_saint-cloud08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud09.jpg")}
                alt="domaine_saint-cloud09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud10.jpg")}
                alt="domaine_saint-cloud10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud11.jpg")}
                alt="domaine_saint-cloud11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud12.jpg")}
                alt="domaine_saint-cloud12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud13.jpg")}
                alt="domaine_saint-cloud13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud14.jpg")}
                alt="domaine_saint-cloud14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud15.jpg")}
                alt="domaine_saint-cloud15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/domaine_saint-cloud/domaine_saint-cloud16.jpg")}
                alt="domaine_saint-cloud16"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Domaine_Saint_Cloud;
