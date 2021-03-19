import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Opera_Garnier extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Opéra Garnier Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/opera_garnier"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Opéra Garnier</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/opera_garnier/opera_garnier.jpg")}
              alt="opera_garnier"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L’opéra Garniera, ou palais Garniera, est un théâtre national qui
              a la vocation d'être une académie de musique, de chorégraphie et
              de poésie lyrique ; il est un élément majeur du patrimoine du 9e
              arrondissement de Paris et de la capitale. Il est situé place de
              l'Opéra, à l'extrémité nord de l'avenue de l'Opéra et au carrefour
              de nombreuses voiesb. Il est accessible par le métro (station
              Opéra), par le RER (ligne A, gare d'Auber) et par le bus.
              L'édifice s'impose comme un monument particulièrement
              représentatif de l'architecture éclectique et du style
              historiciste de la seconde moitié du xixe siècle. Sur une
              conception de l’architecte Charles Garnier retenue à la suite d’un
              concours, sa construction, décidée par Napoléon III dans le cadre
              des transformations de Paris menées par le préfet Haussmann et
              interrompue par la guerre de 1870, fut reprise au début de la
              Troisième République, après la destruction par incendie de l’opéra
              Le Peletier en 1873. Le bâtiment est inauguré le 5 janvier 1875
              par le président Mac Mahon sous la IIIe République. Cet opéra a
              été appelé « opéra de Paris » jusqu'en 1989, date à laquelle
              l'ouverture de l'opéra Bastille, également opéra de Paris, a
              influé sur son appellation. On le désigne désormais par le seul
              nom de son architecte : « opéra Garnier » ou « palais Garnier ».
              Les deux opéras sont aujourd'hui regroupés au sein de
              l'établissement public à caractère industriel et commercial «
              Opéra national de Paris », institution publique française dont la
              mission est de mettre en œuvre la représentation de spectacles
              lyriques ou de ballet, de haute qualité artistique. L'opéra
              Garnier est classé monument historique depuis le 16 octobre 1923.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.operadeparis.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Opéra Garnier
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Opera_Garnier;
