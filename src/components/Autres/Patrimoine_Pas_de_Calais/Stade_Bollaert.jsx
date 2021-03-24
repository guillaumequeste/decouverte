import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Stade_Bollaert extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Stade Bollaert-Delelis Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/stade_bollaert"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Stade Bollaert-Delelis</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/stade_bollaert/stade_bollaert.jpeg")}
              alt="stade_bollaert"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le stade Bollaert-Delelis (prononcer /bɔ'laʁt dələlis/) est le
              principal stade de football de Lens, ville du Pas-de-Calais.
              Construit de 1932 à 1933, il est la résidence du Racing Club de
              Lens depuis son ouverture, à l'exception de la saison 2014-2015,
              lors de sa rénovation pour l'Euro 2016. Jusqu'en 2013, le stade
              pouvait accueillir 41 229 spectateurs, pour une ville de 36 728
              habitants, mais pour une aire urbaine de plus de 550 000
              habitants. Après rénovation, la capacité d'accueil du stade est
              passée à 38 223 personnes. Le stade doit son nom à deux hommes
              importants dans l'histoire du Racing Club de Lens : Félix
              Bollaert, directeur commercial de la Compagnie des mines de Lens,
              soucieux de favoriser le développement des clubs sportifs de la
              région et qui décida la construction du stade en 1931, entre les
              fosses nos 1 et 9 de la Compagnie, et André Delelis, maire de Lens
              et ministre du gouvernement Pierre Mauroy qui « sauva » le stade
              et l’équipe au moment où, à la fin de l’exploitation charbonnière,
              les houillères s’en sont dessaisies.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stade_Bollaert;
