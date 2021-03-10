import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Cabourg2 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cabourg 2 Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cabourg2"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"varaville"} />
          <h1 className="title">Cabourg 2</h1>
          <Next next={"cabourg1"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/cabourg2/cabourg201.jpg")}
              alt="cabourg201"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg2/cabourg202.jpg")}
                alt="cabourg202"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg2/cabourg203.jpg")}
                alt="cabourg203"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg2/cabourg204.jpg")}
                alt="cabourg204"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg2/cabourg205.jpg")}
                alt="cabourg205"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg2/cabourg206.jpg")}
                alt="cabourg206"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg2/cabourg207.jpg")}
                alt="cabourg207"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/cabourg2/cabourg208.jpg")}
                alt="cabourg208"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cabourg2;
