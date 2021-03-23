import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Pere_Lachaise extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Cimetière du Père-Lachaise Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/pere-lachaise"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Cimetière du Père-Lachaise</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/pere-lachaise/pere-lachaise01.jpg")}
              alt="pere-lachaise01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le cimetière du Père-Lachaise est le plus grand cimetière parisien
              intra muros et l'un des plus célèbres dans le monde. Situé dans le
              20e arrondissement, de nombreuses personnes célèbres y sont
              enterrées. Il accueille chaque année plus de trois millions et
              demi de visiteurs1, ce qui en fait le cimetière le plus visité au
              monde2,3. S'il est devenu un lieu touristique majeur de Paris, le
              Père-Lachaise reste un cimetière en activité dans lequel de très
              nombreuses opérations funéraires et cérémonies commémoratives se
              déroulent chaque année.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://pere-lachaise.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cimetière du Père-Lachaise
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise02.jpg")}
                alt="pere-lachaise02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise03.jpg")}
                alt="pere-lachaise03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise04.jpg")}
                alt="pere-lachaise04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise05.jpg")}
                alt="pere-lachaise05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise06.jpg")}
                alt="pere-lachaise06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise07.jpg")}
                alt="pere-lachaise07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise08.jpg")}
                alt="pere-lachaise08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pere-lachaise/pere-lachaise09.jpg")}
                alt="pere-lachaise09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pere_Lachaise;
