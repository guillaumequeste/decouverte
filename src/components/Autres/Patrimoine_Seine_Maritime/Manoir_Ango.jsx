import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Manoir_Ango extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Manoir d'Ango Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/manoir_ango"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Manoir d'Ango</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/manoir_ango/manoir_ango.jpeg")}
              alt="manoir_ango"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le manoir d'Ango est une demeure Renaissance, situé dans la
              commune de Varengeville-sur-Mer, dans le département français de
              la Seine-Maritime, en région Normandie, et édifié par Jean Ango.
              Il est classé monument historique depuis 18623 sur la liste
              établie par Prosper Mérimée.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.manoirdango.fr/Site_Manoir_dAngo/Manoir_dAngo.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manoir d'Ango
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Manoir_Ango;
