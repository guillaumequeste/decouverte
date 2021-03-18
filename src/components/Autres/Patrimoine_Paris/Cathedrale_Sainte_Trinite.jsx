import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Cathedrale_Sainte_Trinite extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Cathédrale de la Sainte-Trinité Découverte de la Normandie et du Littoral"
          }
          link={
            "http://decouverte.guillaumequeste.fr/cathedrale_sainte_trinite"
          }
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Cathédrale de la Sainte-Trinité</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La cathédrale de la Sainte-Trinité de Paris est une cathédrale
              orthodoxe de styles architecturaux byzantin et russe, surmontée de
              cinq clochers à bulbe traditionnels en matériau composite
              recouvert d'or mat, et d'une croix orthodoxe. Elle est située dans
              le 7e arrondissement de Paris. Elle fait partie du Centre
              spirituel et culturel orthodoxe russe (CSCOR) placé sur le même
              site. Dédiée à la Sainte-Trinité, aux « relations historiques,
              culturelles et spirituelles entre la France et la Russie », elle
              est inaugurée en octobre 20161 et succède à la cathédrale des
              Trois-Saints-Docteurs comme nouveau siège du diocèse orthodoxe
              russe de Chersonèse. Le projet est lancé en 2007 par les
              présidents Nicolas Sarkozy et Vladimir Poutine, et par Alexis II,
              patriarche de Moscou. L'église-cathédrale est construite par
              l'architecte Jean-Michel Wilmotte, son complexe culturel orthodoxe
              russe regroupe maison paroissiale, auditorium, centre culturel,
              école bilingue franco-russe, librairie, salles d'exposition,
              cafétéria, et se situe sur les quais de Seine du quartier du
              Gros-Caillou, entre le palais de l'Alma et l'ambassade de
              Bulgarie, aux angles du quai Branly, de l'avenue Rapp et de la rue
              de l'Université.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://cathedrale-sainte-trinite.fr/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cathédrale de la Sainte-Trinité
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cathedrale_Sainte_Trinite;
