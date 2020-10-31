import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";

class Champagne_Lanson extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Champagne Lanson Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/champagne_lanson"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="title">Champagne Lanson</h1>
          <div className="divPhoto">
            <img
              src={require("../../img/autres/champagne_lanson/maison_lanson.jpg")}
              alt="maison_lanson"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La Maison Lanson est une ancienne maison de Champagne, fondée en
              17601 à Reims, par François Delamotte, conseiller échevin et
              marchand à Reims2. Le champagne Lanson est la figure de proue du
              groupe Lanson-BCC, troisième plus grand groupe de Champagne en
              20133,4. Aujourd'hui, par son implantation à l'international, son
              volume de vente ainsi que sa renommée, la Maison Lanson fait
              partie des maisons de Champagne5. La maison est connue pour ne pas
              pratiquer de fermentation malolactique6 et utiliser une part
              importante de pinot noir et de chardonnay dans ses assemblagesƒ.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.lanson.com"
                target="_blank"
              >
                Champagne Lanson
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Champagne_Lanson;
