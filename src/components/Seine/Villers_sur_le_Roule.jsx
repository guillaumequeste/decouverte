import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Villers_sur_le_Roule extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/villers-sur-le-roule"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"tosny"} />
          <h1 className="title">Villers-sur-le-Roule</h1>
          <Next next={"les_mousseaux"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/villers-sur-le-roule/villers-sur-le-roule01.jpg")}
              alt="villers-sur-le-roule01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/villers-sur-le-roule/villers-sur-le-roule02.jpg")}
                alt="villers-sur-le-roule02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/villers-sur-le-roule/villers-sur-le-roule03.jpg")}
                alt="villers-sur-le-roule03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/villers-sur-le-roule/villers-sur-le-roule04.jpg")}
                alt="villers-sur-le-roule04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/villers-sur-le-roule/villers-sur-le-roule05.jpg")}
                alt="villers-sur-le-roule05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/villers-sur-le-roule/villers-sur-le-roule06.jpg")}
                alt="villers-sur-le-roule06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/villers-sur-le-roule/villers-sur-le-roule07.jpg")}
                alt="villers-sur-le-roule07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Villers_sur_le_Roule;
