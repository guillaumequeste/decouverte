import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class La_Villette extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"La Villette Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/la_villette"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">La Villette</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/la_villette/la_villette01.jpg")}
              alt="la_villette01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Parc culturel parisien, La Villette conjugue arts, détente et
              sport en milieu urbain. Un véritable lieu de vie, avec une
              programmation riche : expo, cirque, danse...
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://lavillette.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                La Villette
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/la_villette/la_villette02.jpg")}
                alt="la_villette02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/la_villette/la_villette03.jpg")}
                alt="la_villette03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/la_villette/la_villette04.jpg")}
                alt="la_villette04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default La_Villette;
