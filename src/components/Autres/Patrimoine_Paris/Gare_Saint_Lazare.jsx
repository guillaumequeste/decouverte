import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Gare_Saint_Lazare extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Gare Saint-Lazare Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/gare_saint-lazare"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Gare Saint-Lazare</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/gare_saint-lazare/gare_saint-lazare.jpeg")}
              alt="gare_saint-lazare"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La gare de Paris-Saint-Lazare, dite aussi gare Saint-Lazare, est
              l'une des six grandes gares terminus du réseau de la SNCF à Paris.
              Située dans le quartier de l'Europe du 8e arrondissement, elle est
              l'une des anciennes têtes de ligne du réseau Ouest-État. Elle est
              la première gare édifiée en Île-de-France dès 1837 et affectée
              principalement depuis au trafic de banlieue. C'est la troisième
              gare de Paris par son trafic, avec environ 109,6 millions de
              voyageurs en 2018. Elle perd sa première place à la suite de la
              mise en service du RER A qui détourne une partie du trafic en
              provenance de la banlieue ouest. Elle dessert également la
              Normandie. Après une première inscription par arrêté du 14
              décembre 1979, la gare fait l'objet d'une inscription au titre des
              monuments historiques depuis le 28 décembre 19842. Cette
              protection concerne les façades et toitures de la gare, ainsi que
              la salle des pas-perdus et le hall d'embarquement ; les façades et
              toitures donnant sur la rue de Rome ; les façades et toitures de
              l'ancien hôtel Terminus Saint-Lazare, devenu l'hôtel Hilton Paris
              Opéra, avec le vestibule et le grand salon d'entrée et leur décor
              intérieur.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gare_Saint_Lazare;
