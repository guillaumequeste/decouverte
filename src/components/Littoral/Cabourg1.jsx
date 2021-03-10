import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Cabourg1 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cabourg 1 Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cabourg1"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"cabourg2"} />
          <h1 className="title">Cabourg 1</h1>
          <Next next={"port_dives-sur-mer"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/cabourg1/cabourg101.jpg")}
              alt="cabourg101"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg1/cabourg102.jpg")}
                alt="cabourg102"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg1/cabourg103.jpg")}
                alt="cabourg103"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg1/cabourg104.jpg")}
                alt="cabourg104"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg1/cabourg105.jpg")}
                alt="cabourg105"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg1/cabourg106.jpg")}
                alt="cabourg106"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg1/cabourg107.jpg")}
                alt="cabourg107"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cabourg1;
