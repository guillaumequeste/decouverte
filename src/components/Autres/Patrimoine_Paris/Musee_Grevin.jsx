import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Grevin extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Musée Grévin Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/musee_grevin"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée Grévin</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_grevin/musee_grevin.png")}
              alt="musee_grevin"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée Grévin est un musée de cire privé (propriété de Grévin &
              Cie, inauguré le 5 juin 1882, une filiale de la Compagnie des
              Alpes depuis sa privatisation) situé dans le 9e arrondissement de
              Paris, en France, et dans lequel sont regroupées des reproductions
              en cire de personnages célèbres. Font aussi partie de la visite du
              musée le théâtre Grévin (salle de spectacle) et le Palais des
              Mirages (attraction utilisant le principe de l'illusion
              d'optique). La salle de la Coupole et la salle des Colonnes
              possèdent de très beaux décors de style baroque datant de 1882.
              Façade du musée Grévin, œuvre d'Albert Chartier Façade du musée
              Grévin, œuvre d'Albert Chartier Il ne compte pas moins de deux
              cents personnages de cire allant d’Albert Einstein au Mahatma
              Gandhi en passant par Michael Jackson ou Alfred Hitchcock. De
              nombreuses scènes de l'Histoire de France y sont reconstituées,
              comme la captivité de Louis XVI au Temple ou Jeanne d'Arc sur le
              bûcher. Régulièrement, de nouvelles personnalités font leur entrée
              au Musée Grévin. Ce site est desservi par la station de métro
              Grands Boulevards (ligne 8 et 9 du métro).
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.grevin-paris.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée Grévin
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Grevin;
