import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Chateau_Vascoeuil extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/chateau_vascoeuil"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Château de Vascoeuil</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/chateau_vascoeuil/chateau_vascoeuil.jpg")}
              alt="chateau_vascoeuil"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le château de Vascœuil ou château de La Forestière est un manoir
              situé au nord du village du même nom, dans l'Eure, en Normandie.
              Il comprend un logis, un colombier, une ferme, le tout enclos. Le
              colombier (façades et toitures) fait l’objet d’une inscription au
              titre des monuments historiques depuis le 21 novembre 1985. Le
              logis du château (façades et toitures) fait l’objet d’une
              inscription au titre des monuments historiques depuis le 26 avril
              19912.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="http://www.chateauvascoeuil.com/" target="_blank">
                Château de Vascoeuil
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chateau_Vascoeuil;
