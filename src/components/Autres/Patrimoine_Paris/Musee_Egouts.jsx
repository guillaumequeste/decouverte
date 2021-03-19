import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Egouts extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Musée des Egouts de Paris Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/musee_egouts"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée des Egouts de Paris</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_egouts/musee_egouts.jpeg")}
              alt="musee_egouts"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée des Égouts de Paris est un musée de la ville de Paris
              situé sous l'esplanade Habib-Bourguiba, face au no 93 quai
              d'Orsay, au niveau du pont de l'Alma, dans le 7e arrondissement de
              Paris.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/71499/Musee-des-egouts-de-Paris"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musée des Egouts de Paris
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Egouts;
