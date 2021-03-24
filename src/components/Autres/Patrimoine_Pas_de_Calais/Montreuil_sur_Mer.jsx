import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Montreuil_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Montreuil-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/montreuil-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Montreuil-sur-Mer</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer01.jpg")}
              alt="montreuil-sur-mer01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Montreuil1 (parfois appelée Montreuil-sur-Mer) est une commune
              française située dans le département du Pas-de-Calais en région
              Hauts-de-France. Malgré sa faible population (2 014 habitants au
              dernier recensement en 2017) et sa faible superficie, Montreuil
              est une commune relativement importante puisqu'elle occupe le
              statut de sous-préfecture du département (aux côtés de grandes
              villes comme Calais, Boulogne et Lens) ainsi que celui de
              chef-lieu d'un arrondissement départemental regroupant 164
              communes, parmi lesquelles certaines sont bien plus peuplées comme
              Berck et Étaples. Elle est la 5e sous-préfecture la moins peuplée
              de France et est l'une des rares sous-préfectures à ne pas faire
              partie des villes les plus peuplées de son département (Montreuil
              est la 145e ville du Pas-de-Calais, ce qui constitue un record).
              Village typique à l'Histoire riche, principalement connu pour ses
              fortifications et ses remparts datant des xiiie et xvie siècles,
              il est devenu l'un des principaux lieux touristiques de la région
              et a reçu de nombreux labels.
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer02.jpg")}
                alt="montreuil-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer03.jpg")}
                alt="montreuil-sur-mer03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer04.jpg")}
                alt="montreuil-sur-mer04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer05.jpg")}
                alt="montreuil-sur-mer05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer06.jpg")}
                alt="montreuil-sur-mer06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer07.jpg")}
                alt="montreuil-sur-mer07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer08.jpg")}
                alt="montreuil-sur-mer08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/montreuil-sur-mer/montreuil-sur-mer09.jpg")}
                alt="montreuil-sur-mer09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Montreuil_sur_Mer;
