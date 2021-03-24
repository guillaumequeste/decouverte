import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Avenue_Verte_Dampierre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Avenue verte Dampierre-Saint-Nicolas Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/avenue_verte_dampierre"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <Previous prev={"avenue_verte_saint-aubin-le-cauf"} />
          <h1 className="title">Avenue verte Dampierre-Saint-Nicolas</h1>
          <Next next={"avenue_verte_meulers"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre01.jpg")}
              alt="avenue_verte_dampierre01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre02.jpg")}
                alt="avenue_verte_dampierre02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre03.jpg")}
                alt="avenue_verte_dampierre03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre04.jpg")}
                alt="avenue_verte_dampierre04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre05.jpg")}
                alt="avenue_verte_dampierre05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre06.jpg")}
                alt="avenue_verte_dampierre06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_dampierre/avenue_verte_dampierre07.jpg")}
                alt="avenue_verte_dampierre07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Avenue_Verte_Dampierre;
