import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Chateau_Pierrefonds extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/chateau_pierrefonds"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Château de Pierrefonds</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/chateau_pierrefonds/chateau_pierrefonds.jpg")}
              alt="chateau_pierrefonds"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le château de Pierrefonds est un imposant château fort situé à
              Pierrefonds, dans le département de l'Oise, en région des
              Hauts-de-France, à la lisière sud-est de la forêt de Compiègne, au
              nord de Paris. Le château de Pierrefonds présente la plupart des
              caractéristiques de l'ouvrage défensif du Moyen Âge, en fait une
              interprétation du dit style troubadour du xixe siècle, très en
              vogue au Second Empire dans les classes aisées : il fut
              reconstruit à cette époque par Viollet-le-Duc, qui y entreprit
              également d'importants travaux de création de décoration et de
              mobilier. Ce château fait l’objet d’un classement au titre des
              monuments historiques par la liste de 18621. Il est géré par le
              Centre des monuments nationaux3.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="http://www.chateau-pierrefonds.fr/" target="_blank">
                Château de Pierrefonds
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chateau_Pierrefonds;
