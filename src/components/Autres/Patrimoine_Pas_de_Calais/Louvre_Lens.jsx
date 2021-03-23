import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Louvre_Lens extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Musée du Louvre-Lens Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/louvre-lens"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée du Louvre-Lens</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/louvre-lens/louvre-lens.jpeg")}
              alt="louvre-lens"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Louvre-Lens est un établissement public de coopération
              culturelle à caractère administratif fondé par le conseil régional
              du Nord-Pas-de-Calais, le département du Pas-de-Calais, la
              communauté d’agglomération de Lens-Liévin, la ville de Lens et le
              musée du Louvre. Ce « deuxième Louvre » est situé à Lens dans le
              Pas-de-Calais, sa directrice est Marie Lavandier ; il s'agit d'un
              établissement autonome, lié au musée du Louvre parisien par une
              convention scientifique et culturelle. Le musée est construit sur
              le site de l'ancienne fosse no 9 des mines de Lens. Le nouveau
              bâtiment, sous maîtrise d'ouvrage du conseil régional du
              Nord-Pas-de-Calais, accueille des expositions semi-permanentes
              représentatives de l'ensemble des collections du musée du Louvre,
              renouvelées régulièrement. Il accueille également des expositions
              temporaires de niveau national ou international. Le musée est
              desservi par des navettes TADAO le relient au pôle gares toutes
              les 30 minutes. L'inauguration, le 4 décembre 2012, jour de la
              Sainte-Barbe, a donné lieu, de 18 h à minuit, à une opération «
              portes ouvertes » gratuite. L'ouverture officielle au public a eu
              lieu le 12 décembre 2012. Le musée est un des symboles de la
              reconversion du bassin minier du Nord-Pas-de-Calais, il est situé
              entre des sites inscrits depuis le 30 juin 2012 sur la liste
              établie par le comité du patrimoine mondial de l'Organisation des
              Nations unies pour l'éducation, la science et la culture (UNESCO).
              Le millionième visiteur est accueilli le 29 janvier 2014.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.louvrelens.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée du Louvre-Lens
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Louvre_Lens;
