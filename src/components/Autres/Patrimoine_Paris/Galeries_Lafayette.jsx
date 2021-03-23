import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

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
              src={require("../../../img/autres/galeries_lafayette/galeries_lafayette01.jpg")}
              alt="galeries_lafayette01"
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
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette02.jpg")}
                alt="galeries_lafayette02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette03.jpg")}
                alt="galeries_lafayette03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette04.jpg")}
                alt="galeries_lafayette04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette05.jpg")}
                alt="galeries_lafayette05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette06.jpg")}
                alt="galeries_lafayette06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette07.jpg")}
                alt="galeries_lafayette07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette08.jpg")}
                alt="galeries_lafayette08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galeries_lafayette/galeries_lafayette09.jpg")}
                alt="galeries_lafayette09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Galeries_Lafayette;
