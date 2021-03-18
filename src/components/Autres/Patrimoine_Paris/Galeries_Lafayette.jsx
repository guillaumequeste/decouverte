import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Galeries_Lafayette extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Galeries Lafayette Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/galeries_lafayette"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Galeries Lafayette</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
            Les Galeries Lafayette sont une enseigne de grands magasins appartenant au groupe Galeries Lafayette.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.galerieslafayette.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galeries Lafayette
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Galeries_Lafayette;
