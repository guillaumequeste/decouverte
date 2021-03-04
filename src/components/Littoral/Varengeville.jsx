import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Varengeville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/varengeville"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"sainte-marguerite"} />
          <h1 className="title">Varengeville-sur-Mer</h1>
          <Next next={"pourville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/varengeville/varengeville01.jpg")}
              alt="varengeville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville02.jpg")}
                alt="varengeville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville03.jpg")}
                alt="varengeville03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville04.jpg")}
                alt="varengeville04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville05.jpg")}
                alt="varengeville05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville06.jpg")}
                alt="varengeville06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville07.jpg")}
                alt="varengeville07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville08.jpg")}
                alt="varengeville08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville09.jpg")}
                alt="varengeville09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville10.jpg")}
                alt="varengeville10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville11.jpg")}
                alt="varengeville11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville12.jpg")}
                alt="varengeville12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville13.jpg")}
                alt="varengeville13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville14.jpg")}
                alt="varengeville14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville15.jpg")}
                alt="varengeville15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville16.jpg")}
                alt="varengeville16"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville17.jpg")}
                alt="varengeville17"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville18.jpg")}
                alt="varengeville18"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville19.jpg")}
                alt="varengeville19"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville20.jpg")}
                alt="varengeville20"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varengeville/varengeville21.jpg")}
                alt="varengeville21"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Varengeville;
