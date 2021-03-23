import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Souterroscope_Ardoisieres extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Souterroscope des Ardoisières Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/souterroscope_ardoisieres"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Souterroscope des Ardoisières</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/souterroscope_ardoisieres/souterroscope_ardoisieres.jpeg")}
              alt="souterroscope_ardoisieres"
              className="photo"
            />
          </div>
          <div className="container">
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.souterroscope-ardoisieres.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Souterroscope des Ardoisières
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Souterroscope_Ardoisieres;
