import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Chateau_Carrouges extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Château de Carrouges Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/chateau_carrouges"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Château de Carrouges</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/chateau_carrouges/chateau_carrouges.jpg")}
              alt="chateau_carrouges"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le château de Carrouges est une demeure, du xive siècle, plusieurs
              fois remaniée (pavillon du cardinal Le Veneur, bastion ouest
              fortifié au temps des guerres de religion, grands appartements
              notamment) et réaménagé au xviiie siècle, qui se dresse sur la
              commune française de Carrouges dans le département de l'Orne, en
              région Normandie. Le château, géré par le centre des monuments
              nationaux, fait l’objet d’un classement au titre des monuments
              historiques par arrêté du 6 décembre 19272.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="http://chateau-carrouges.fr" target="_blank">
                Château de Carrouges
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chateau_Carrouges;
