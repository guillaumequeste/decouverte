import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Buttes_Chaumont extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Parc des Buttes-Chaumont Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/buttes_chaumont"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Parc des Buttes-Chaumont</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/bnf/bnf.jpeg")}
              alt="bnf"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le parc des Buttes-Chaumont est un jardin public situé dans le
              nord-est de Paris, en France, dans le 19e arrondissement de la
              ville. Avec près de 25 hectares, le parc est l'un des plus grands
              espaces verts de Paris. Inauguré le 1er avril 18671 pendant les
              dernières années du règne de Napoléon III, il s'agit d'une
              réalisation de l'ingénieur Adolphe Alphand. Ce jardin à l'anglaise
              imite un paysage de montagne : rochers, falaises, torrents,
              cascades, grotte, alpages, belvédères.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttes_Chaumont;
