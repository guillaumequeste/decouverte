import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Orsay extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Musée d'Orsay Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/musee_orsay"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée d'Orsay</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_orsay/musee_orsay.jpeg")}
              alt="musee_orsay"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée d’Orsay est un musée national inauguré en 1986, situé
              dans le 7e arrondissement de Paris le long de la rive gauche de la
              Seine. Il est installé dans l’ancienne gare d'Orsay, construite
              par Victor Laloux de 1898 à 1900 et réaménagée en musée sur
              décision du président de la République Valéry Giscard d'Estaing.
              Ses collections présentent l’art occidental de 1848 à 1914, dans
              toute sa diversité : peinture, sculpture, arts décoratifs, art
              graphique, photographie, architecture, etc. Il est l’un des plus
              grands musées d’Europe pour cette période. Le musée possède la
              plus importante collection de peintures impressionnistes et
              postimpressionnistes au monde, avec près de 1 100 toiles3 au total
              sur plus de 3 650, et l’on peut y voir des chefs-d’œuvre de la
              peinture et de la sculpture comme Le Déjeuner sur l'herbe et
              l’Olympia d’Édouard Manet, une épreuve de La Petite Danseuse de
              quatorze ans de Degas, L'Origine du monde, Un enterrement à
              Ornans, L'Atelier du peintre de Courbet, Les joueurs de cartes de
              Cézanne ou encore cinq tableaux de la Série des Cathédrales de
              Rouen de Monet et Bal du moulin de la Galette de Renoir. Des
              expositions temporaires monographiques ou thématiques concernant
              périodiquement l’œuvre d’un artiste, un courant ou une question
              d’histoire de l’art sont souvent mises en place. Un auditorium
              accueille des manifestations diversifiées, concerts, cinéma,
              théâtre d’ombres, conférences et colloques et des spectacles
              spécifiquement destinés à un jeune public.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.musee-orsay.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée d'Orsay
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Orsay;
