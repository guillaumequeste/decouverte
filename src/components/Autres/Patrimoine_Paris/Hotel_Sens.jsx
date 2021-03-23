import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Hotel_Sens extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hôtel de Sens Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/hotel_sens"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Hôtel de Sens</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/hotel_sens/hotel_sens01.jpg")}
              alt="hotel_sens01"
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
                src={require("../../../img/autres/hotel_sens/hotel_sens02.jpg")}
                alt="hotel_sens02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/hotel_sens/hotel_sens03.jpg")}
                alt="hotel_sens03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/hotel_sens/hotel_sens04.jpg")}
                alt="hotel_sens04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/hotel_sens/hotel_sens05.jpg")}
                alt="hotel_sens05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/hotel_sens/hotel_sens06.jpg")}
                alt="hotel_sens06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotel_Sens;
