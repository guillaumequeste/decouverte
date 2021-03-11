import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Ault extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/ault"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"le_bois_de_cise"} />
          <h1 className="title">Ault</h1>
          <Next next={"cayeux"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/ault/ault01.jpg")}
              alt="ault01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault02.jpg")}
                alt="ault02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault03.jpg")}
                alt="ault03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault04.jpg")}
                alt="ault04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault05.jpg")}
                alt="ault05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault06.jpg")}
                alt="ault06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault07.jpg")}
                alt="ault07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault08.jpg")}
                alt="ault08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault09.jpg")}
                alt="ault09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault10.jpg")}
                alt="ault10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault11.jpg")}
                alt="ault11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault12.jpg")}
                alt="ault12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/ault/ault13.jpg")}
                alt="ault13"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Ault;
