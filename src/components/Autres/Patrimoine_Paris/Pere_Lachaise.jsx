import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

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
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
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
        </div>
      </div>
    );
  }
}

export default Pere_Lachaise;
