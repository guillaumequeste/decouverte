import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Maison_Jules_Verne extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Maison de Jules Verne Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/maison_jules_verne"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Maison de Jules Verne</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/maison_jules_verne/maison_jules_verne01.jpg")}
              alt="maison_jules_verne01"
              className="photoGrosHorloge"
            />
          </div>
          <div className="container">
            <p>
              La Maison de Jules Verne, située au 2, rue Charles-Dubois à
              Amiens, est la demeure dans laquelle Jules Verne a vécu de 1882 à
              1900. Elle abrite maintenant un musée qui évoque la vie, l’œuvre
              et l'action publique de l'écrivain, qui y a composé plus de trente
              romans.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.amiens.fr/Vivre-a-Amiens/Culture-Patrimoine/Etablissements-culturels/Maison-de-Jules-Verne"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maison de Jules Verne
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Maison_Jules_Verne;
