import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Yport extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/yport"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"valleuse_de_vaucottes"} />
          <h1 className="title">Yport</h1>
          <Next next={"vgrainval"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/yport/yport01.jpg")}
              alt="yport01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/yport/yport02.jpg")}
                alt="yport02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/yport/yport03.jpg")}
                alt="yport03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/yport/yport04.jpg")}
                alt="yport04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/yport/yport05.jpg")}
                alt="yport05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/yport/yport06.jpg")}
                alt="yport06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/yport/yport07.jpg")}
                alt="yport07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Yport;
