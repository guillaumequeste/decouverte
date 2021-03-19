import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

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
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
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
        </div>
      </div>
    );
  }
}

export default Domaine_Saint_Cloud;
