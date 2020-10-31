import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";

class Cathedrale_Reims extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cathédrale Reims Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cathedrale_reims"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="title">Cathédrale Notre-Dame de Reims</h1>
          <div className="divPhoto">
            <img
              src={require("../../img/autres/cathedrale_reims/cathedrale_reims01.jpg")}
              alt="cathedrale_reims01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/cathedrale_reims/cathedrale_reims02.jpg")}
                alt="cathedrale_reims02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/cathedrale_reims/cathedrale_reims03.jpg")}
                alt="cathedrale_reims03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/autres/cathedrale_reims/cathedrale_reims04.jpg")}
                alt="cathedrale_reims04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cathedrale_Reims;
