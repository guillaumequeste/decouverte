import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Funiculaire_Montmartre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Funiculaire de Montmartre Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/funiculaire_montmartre"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Funiculaire de Montmartre</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/funiculaire_montmartre/funiculaire_montmartre.jpeg")}
              alt="funiculaire_montmartre"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le funiculaire de Montmartre, situé dans le 18e arrondissement de
              Paris (France), est depuis 1991 un ascenseur incliné automatique
              comprenant deux cabines, permettant de monter au sommet de la
              butte Montmartre et d'accéder ainsi à la basilique du Sacré-Cœur
              sans devoir emprunter l'escalier de plus de deux-cent-vingt
              marches. Ouvert en juillet 1900, il a été entièrement rénové en
              1935 puis en 1991. Long de cent-huit mètres, il gravit les
              trente-six mètres de dénivelé en moins d'une minute trente. Géré
              par la RATP, l'opérateur des transports en commun parisiens, il a
              transporté 3 340 170 voyageurs en 20171.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/transports/103125/Funiculaire-de-Montmartre"
                target="_blank"
                rel="noopener noreferrer"
              >
                Funiculaire de Montmartre
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Funiculaire_Montmartre;
