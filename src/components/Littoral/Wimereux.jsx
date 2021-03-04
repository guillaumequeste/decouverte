import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Wimereux extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/wimereux"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"boulogne"} />
          <h1 className="title">Wimereux</h1>
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/wimereux/wimereux01.jpg")}
              alt="wimereux01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux02.jpg")}
                alt="wimereux02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux03.jpg")}
                alt="wimereux03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux04.jpg")}
                alt="wimereux04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux05.jpg")}
                alt="wimereux05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux06.jpg")}
                alt="wimereux06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux07.jpg")}
                alt="wimereux07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux08.jpg")}
                alt="wimereux08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/wimereux/wimereux09.jpg")}
                alt="wimereux09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Wimereux;
