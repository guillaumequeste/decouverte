import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Le_Val_d_Hazey extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_val_d_hazey"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"les_mousseaux"} />
          <h1 className="title">Le Val d'Hazey</h1>
          <Next next={"port-mort"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/le_val_d_hazey/le_val_d_hazey01.jpg")}
              alt="le_val_d_hazey01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/le_val_d_hazey/le_val_d_hazey02.jpg")}
                alt="le_val_d_hazey02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/le_val_d_hazey/le_val_d_hazey03.jpg")}
                alt="le_val_d_hazey03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/le_val_d_hazey/le_val_d_hazey04.jpg")}
                alt="le_val_d_hazey04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Val_d_Hazey;
