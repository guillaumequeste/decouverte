import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Funiculaire_Treport extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Funiculaire du Tréport Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/funiculaire_treport"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Funiculaire du Tréport</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/funiculaire_treport/funiculaire_treport.jpeg")}
              alt="funiculaire_treport"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le funiculaire du Tréport (parfois dénommé funiculaire des
              Terrasses) est aujourd'hui une ligne de quatre ascenseurs inclinés
              située en Normandie sur la commune du Tréport (Seine-Maritime).
              Mise en service en 2006, l'installation actuelle permet de relier
              les quartiers haut et bas de la ville en reprenant une partie des
              infrastructures de l'ancien funiculaire exploité entre 1908 et
              1941 dont le tracé traverse la falaise sur une longueur de 55
              mètres.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.seine-maritime-tourisme.com/fr/je-decouvre/10-experiences-a-vivre/prendre-le-funiculaire-au-treport.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Funiculaire du Tréport
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Funiculaire_Treport;
