import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";

class Petite_France extends Component {
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
          <h1 className="titleAutres">Petite France</h1>
          <div className="divPhoto">
            <img
              src={require("../../img/autres/petite_france/petite_france11.jpg")}
              alt="petite_france11"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La Petite France est un quartier pittoresque du centre historique
              de Strasbourg. Situé sur la Grande Île, il est classé au
              patrimoine mondial de l'UNESCO depuis 1988. Le quartier est
              délimité au nord par la rue du Bain-aux-Plantes, la place
              Benjamin-Zix et la rue des Dentelles ; à l'est par la rue du
              Pont-Saint-Martin, le pont Saint-Martin et la passerelle des
              Moulins ; au sud par le canal du moulin Zorn ; à l'ouest par les
              ponts couverts.
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france01.jpg")}
                alt="petite_france01"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france02.jpg")}
                alt="petite_france02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france03.jpg")}
                alt="petite_france03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france04.jpg")}
                alt="petite_france04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france05.jpg")}
                alt="petite_france05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france06.jpg")}
                alt="petite_france06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france07.jpg")}
                alt="petite_france07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france08.jpg")}
                alt="petite_france08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france09.jpg")}
                alt="petite_france09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france10.jpg")}
                alt="petite_france10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/petite_france/petite_france12.jpg")}
                alt="petite_france12"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Petite_France;
