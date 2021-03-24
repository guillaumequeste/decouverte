import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Avenue_Verte_Saint_Aubin_le_Cauf extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Avenue verte Saint-Aubin-le-Cauf Découverte de la Normandie et du Littoral"}
          link={
            "http://decouverte.guillaumequeste.fr/avenue_verte_saint-aubin-le-cauf"
          }
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <Previous prev={"avenue_verte_arques"} />
          <h1 className="title">Avenue verte Saint-Aubin-le-Cauf</h1>
          <Next next={"avenue_verte_dampierre"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/avenue_verte_saint-aubin-le-cauf/avenue_verte_saint-aubin-le-cauf01.jpg")}
              alt="avenue_verte_saint-aubin-le-cauf01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_saint-aubin-le-cauf/avenue_verte_saint-aubin-le-cauf02.jpg")}
                alt="avenue_verte_saint-aubin-le-cauf02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Avenue_Verte_Saint_Aubin_le_Cauf;
