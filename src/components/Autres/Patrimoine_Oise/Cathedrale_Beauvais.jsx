import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Cathedrale_Beauvais extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cathedrale_beauvais"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Cathédrale Saint-Pierre de Beauvais</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/cathedrale_beauvais/cathedrale_beauvais01.jpg")}
              alt="cathedrale_beauvais01"
              className="photoGrosHorloge"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cathedrale_beauvais/cathedrale_beauvais02.jpg")}
                alt="cathedrale_beauvais02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cathedrale_beauvais/cathedrale_beauvais03.jpg")}
                alt="cathedrale_beauvais03"
                className="photoGrosHorloge"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cathedrale_Beauvais;
