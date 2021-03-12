import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

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
          <h1 className="titleAutres">Lac du Salagou</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/lac_du_salagou/lac_du_salagou01.jpg")}
              alt="lac_du_salagou01"
              className="photo"
            />
          </div>
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
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou02.jpg")}
                alt="lac_du_salagou02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou03.jpg")}
                alt="lac_du_salagou03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou04.jpg")}
                alt="lac_du_salagou04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou05.jpg")}
                alt="lac_du_salagou05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou06.jpg")}
                alt="lac_du_salagou06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou07.jpg")}
                alt="lac_du_salagou07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou08.jpg")}
                alt="lac_du_salagou08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou09.jpg")}
                alt="lac_du_salagou09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou10.jpg")}
                alt="lac_du_salagou10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou11.jpg")}
                alt="lac_du_salagou11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou12.jpg")}
                alt="lac_du_salagou12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou13.jpg")}
                alt="lac_du_salagou13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou14.jpg")}
                alt="lac_du_salagou14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou15.jpg")}
                alt="lac_du_salagou15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/lac_du_salagou/lac_du_salagou16.jpg")}
                alt="lac_du_salagou16"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Lac_du_Salagou;
