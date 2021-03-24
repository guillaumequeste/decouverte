import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";

class Avenue_Verte_Arques extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Avenue verte Arques-la-Bataille Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/avenue_verte_arques"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="title">Avenue verte Arques-la-Bataille</h1>
          <Next next={"avenue_verte_saint-aubin-le-cauf"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/avenue_verte_arques/avenue_verte_arques01.jpg")}
              alt="avenue_verte_arques01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_arques/avenue_verte_arques02.jpg")}
                alt="avenue_verte_arques02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_arques/avenue_verte_arques03.jpg")}
                alt="avenue_verte_arques03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/avenue_verte_arques/avenue_verte_arques04.jpg")}
                alt="avenue_verte_arques04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Avenue_Verte_Arques;
