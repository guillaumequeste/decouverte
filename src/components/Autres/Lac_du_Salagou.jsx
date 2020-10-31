import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";

class Lac_du_Salagou extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Petite France Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/petite_france"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="title">Lac du Salagou</h1>
          <div className="container">
            <p>
              Le lac du Salagou est un lac de retenue du barrage du Salagou. Il
              est situé au centre du département de l'Hérault, sur la rivière
              Salagou, affluent de la rivière Lergue qui se jette dans
              l'Hérault. Il atteint une profondeur d'environ 50 mètres. Le
              niveau de l'eau est à 139 m d'altitude. La surface du plan d'eau
              est d'environ 700 hectares, tandis que le volume du réservoir est
              égal à 102 millions de m3. Le lac est dominé par des monts et des
              plateaux culminant à 300 m à l'est, jusqu'à 407 m pour le Carels à
              l'ouest et 535 m pour le mont Liausson au Sud. Ce dernier sépare
              le lac du Salagou du cirque dolomitique de Mourèze.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Lac_du_Salagou;
