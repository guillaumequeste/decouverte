import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Avenue_Verte_Saint_Vaast extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/avenue_verte_saint-vaast"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <Previous prev={"avenue_verte_meulers"} />
          <h1 className="title">Abbaye verte Saint-Vaast-d'Equiqueville</h1>
          <Next next={"avenue_verte_osmoy"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/avenue_verte_saint-vaast/avenue_verte_saint-vaast01.jpg")}
              alt="avenue_verte_saint-vaast01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_saint-vaast/avenue_verte_saint-vaast02.jpg")}
                alt="avenue_verte_saint-vaast02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_saint-vaast/avenue_verte_saint-vaast03.jpg")}
                alt="avenue_verte_saint-vaast03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_saint-vaast/avenue_verte_saint-vaast04.jpg")}
                alt="avenue_verte_saint-vaast04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Avenue_Verte_Saint_Vaast;
