import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";

class Puy_de_Dome extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Puy de Dôme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/tapisserie_bayeux"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="title">Puy de Dôme</h1>
          <div className="divPhoto">
                        
                    </div>
          <div className="container">
            <p>
            Le puy de Dôme est un volcan endormi de la chaîne des Puys, dans le Massif central. Il se trouve à une quinzaine de kilomètres de Clermont-Ferrand et a donné son nom au département du Puy-de-Dôme.
            </p>
            <p className="lienSiteOfficiel">Site officiel : <a href="https://www.panoramiquedesdomes.fr/page/le-puy-de-dome" target="_blank">Puy de Dôme</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Puy_de_Dome;
