import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Pont_du_Gard extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pont du Gard Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pont_du_gard"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Pont du Gard</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/pont_du_gard/pont_du_gard01.jpg")}
              alt="pont_du_gard01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le pont du Gard est un pont à trois niveaux destiné au passage
              d'un aqueduc romain. Il est situé à Vers-Pont-du-Gard entre Uzès
              et Remoulins, non loin de Nîmes, dans le département français du
              Gard. Il enjambe le Gardon. Probablement bâti dans la première
              moitié du ier siècle, il assurait la continuité de l'aqueduc
              romain qui conduisait l’eau d’Uzès à Nîmes. D'après les dernières
              recherches, il aurait cessé d'être utilisé au début du vie siècle.
              Au Moyen Âge, les piles du second étage furent échancrées afin que
              l'ouvrage soit utilisé comme pont routier. Dès le xvie siècle,
              l'architecture exceptionnelle du pont du Gard ayant attiré
              l'attention, l'ouvrage bénéficia dès lors de restaurations
              régulières destinées à préserver son intégrité. Un pont routier
              lui fut accolé en 1743-1747. Plus haut pont-aqueduc connu du monde
              romain, il fait l'objet d'un classement au titre des monuments
              historiques par la liste de 18401 et a été inscrit sur la liste du
              patrimoine mondial de l'Unesco en décembre 1985.
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard02.jpg")}
                alt="pont_du_gard02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard03.jpg")}
                alt="pont_du_gard03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard04.jpg")}
                alt="pont_du_gard04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard05.jpg")}
                alt="pont_du_gard05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard06.jpg")}
                alt="pont_du_gard06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard07.jpg")}
                alt="pont_du_gard07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard08.jpg")}
                alt="pont_du_gard08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard09.jpg")}
                alt="pont_du_gard09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard10.jpg")}
                alt="pont_du_gard10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard11.jpg")}
                alt="pont_du_gard11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard12.jpg")}
                alt="pont_du_gard12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard13.jpg")}
                alt="pont_du_gard13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard14.jpg")}
                alt="pont_du_gard14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/pont_du_gard/pont_du_gard15.jpg")}
                alt="pont_du_gard15"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pont_du_Gard;
