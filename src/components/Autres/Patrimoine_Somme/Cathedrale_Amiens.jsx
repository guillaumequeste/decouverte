import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Cathedrale_Amiens extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cathédrale Notre-Dame d'Amiens Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cathedrale_amiens"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Cathédrale Notre-Dame d'Amiens</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/cathedrale_amiens/cathedrale_amiens01.jpg")}
              alt="cathedrale_amiens01"
              className="photoGrosHorloge"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cathedrale_amiens/cathedrale_amiens02.jpg")}
                alt="cathedrale_amiens02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cathedrale_amiens/cathedrale_amiens03.jpg")}
                alt="cathedrale_amiens03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/cathedrale_amiens/cathedrale_amiens04.jpg")}
                alt="cathedrale_amiens04"
                className="photoGrosHorloge"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cathedrale_Amiens;
