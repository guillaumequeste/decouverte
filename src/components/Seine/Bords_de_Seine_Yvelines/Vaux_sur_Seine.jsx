import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Vaux_sur_Seine extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/vaux-sur-seine"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"les_mureaux"} />
          <h1 className="title">Vaux-sur-Seine</h1>
          <Next next={"triel-sur-seine"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine01.jpg")}
              alt="vaux-sur-seine01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine02.jpg")}
                alt="vaux-sur-seine02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine03.jpg")}
                alt="vaux-sur-seine03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine04.jpg")}
                alt="vaux-sur-seine04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine05.jpg")}
                alt="vaux-sur-seine05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine06.jpg")}
                alt="vaux-sur-seine06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine07.jpg")}
                alt="vaux-sur-seine07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine08.jpg")}
                alt="vaux-sur-seine08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine09.jpg")}
                alt="vaux-sur-seine09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine10.jpg")}
                alt="vaux-sur-seine10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine11.jpg")}
                alt="vaux-sur-seine11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine12.jpg")}
                alt="vaux-sur-seine12"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Vaux_sur_Seine;
